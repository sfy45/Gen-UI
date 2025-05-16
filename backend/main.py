from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
import os
import httpx
from dotenv import load_dotenv
import logging, pytz
from datetime import datetime
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from langchain_google_genai import ChatGoogleGenerativeAI
import json
import uuid

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="Gen-UI API Gateway",
    description="API Gateway for Gen-UI application",
    version="1.0.0",
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Environment variables
GOOGLE_API_KEY = os.getenv("GOOGLE_AI_API_KEY")
OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY")
NEWS_API_KEY = os.getenv("NEWS_API_KEY")

# Check if required API keys are available
if not GOOGLE_API_KEY:
    logger.warning("GOOGLE_AI_API_KEY is not set. AI features will be limited.")
if not OPENWEATHER_API_KEY:
    logger.warning("OPENWEATHER_API_KEY is not set. Weather feature will be limited.")
if not NEWS_API_KEY:
    logger.warning("NEWS_API_KEY is not set. News feature will be limited.")

# Initialize LangChain components
conversation_memories = {}

def get_or_create_memory(session_id: str):
    if session_id not in conversation_memories:
        conversation_memories[session_id] = ConversationBufferMemory()
    return conversation_memories[session_id]

# Request models
class MessageRequest(BaseModel):
    message: str
    session_id: Optional[str] = None

class WeatherRequest(BaseModel):
    city: str

class NewsRequest(BaseModel):
    query: Optional[str] = None
    category: Optional[str] = None
    country: Optional[str] = "us"

# Response models
class ApiResponse(BaseModel):
    response: str
    type: str = "text"
    additional_data: Optional[Dict[str, Any]] = None

# Helper functions
async def get_weather_data(city: str) -> Dict[str, Any]:
    if not OPENWEATHER_API_KEY:
        raise HTTPException(status_code=503, detail="Weather service unavailable (API key missing)")
    
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"http://api.openweathermap.org/data/2.5/weather",
                params={
                    "q": city,
                    "appid": OPENWEATHER_API_KEY,
                    "units": "metric"
                }
            )
            
            if response.status_code == 404:
                raise HTTPException(status_code=404, detail=f"City '{city}' not found")
            
            response.raise_for_status()
            data = response.json()
            
            return {
                "city": data["name"],
                "country": data["sys"]["country"],
                "description": data["weather"][0]["description"],
                "temperature": data["main"]["temp"],
                "feels_like": data["main"]["feels_like"],
                "humidity": data["main"]["humidity"],
                "wind_speed": data["wind"]["speed"],
                "icon": data["weather"][0]["icon"],
            }
    except httpx.HTTPStatusError as e:
        logger.error(f"HTTP error occurred: {e}")
        raise HTTPException(status_code=e.response.status_code, detail=str(e))
    except Exception as e:
        logger.error(f"Error fetching weather data: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch weather data")

async def get_news_data(query: Optional[str] = None, category: Optional[str] = None, country: str = "us") -> List[Dict[str, Any]]:
    if not NEWS_API_KEY:
        raise HTTPException(status_code=503, detail="News service unavailable (API key missing)")
    
    try:
        async with httpx.AsyncClient() as client:
            params = {
                "apiKey": NEWS_API_KEY,
                "country": country,
            }
            
            if query:
                params["q"] = query
            if category:
                params["category"] = category
                
            response = await client.get(
                "https://newsapi.org/v2/top-headlines",
                params=params
            )
            
            response.raise_for_status()
            data = response.json()
            
            articles = data.get("articles", [])
            return [
                {
                    "title": article["title"],
                    "description": article["description"],
                    "url": article["url"],
                    "source": article["source"]["name"],
                    "published_at": article["publishedAt"],
                    "image_url": article["urlToImage"],
                }
                for article in articles[:5]  # Limit to 5 articles
            ]
    except httpx.HTTPStatusError as e:
        logger.error(f"HTTP error occurred: {e}")
        raise HTTPException(status_code=e.response.status_code, detail=str(e))
    except Exception as e:
        logger.error(f"Error fetching news data: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch news data")

async def generate_ai_response(message: str, session_id: str) -> str:
    if not GOOGLE_API_KEY:
        logger.error(f"GOOGLE_API_KEY missing. Cannot generate AI response.")
        raise HTTPException(status_code=503, detail="AI service unavailable (API key missing)")
    try:
        memory = get_or_create_memory(session_id)
        llm = ChatGoogleGenerativeAI(
            model="gemini-1.5-flash-latest",
            google_api_key=GOOGLE_API_KEY,
            temperature=0.7,
        )
        conversation = ConversationChain(
            llm=llm,
            memory=memory,
            verbose=True
        )
        logger.info(f"Calling Gemini with message: {message} | session_id: {session_id}")
        response = await conversation.apredict(input=message)
        logger.info(f"Gemini response: {response}")
        return response
    except Exception as e:
        import traceback
        logger.error(f"Error generating AI response: {e}\n{traceback.format_exc()}")
        return f"AI error: {e}"  # Return error string for debugging

# API routes
@app.get("/")
async def root():
    return {"message": "Welcome to Gen-UI API Gateway", "status": "operational"}

@app.post("/api/chat", response_model=ApiResponse)
async def chat(request: MessageRequest):
    try:
        # Generate a session ID if not provided
        session_id = request.session_id or str(uuid.uuid4())
        
        # Check if the message is about weather
        message = request.message.lower()
        if message.startswith("weather in ") or "weather" in message and "in " in message:
            # Extract city name
            city = message.split("in ", 1)[1].strip() if "in " in message else None
            
            if city:
                weather_data = await get_weather_data(city)
                weather_text = (
                    f"The current weather in {weather_data['city']} is {weather_data['description']} "
                    f"with a temperature of {weather_data['temperature']}°C (feels like {weather_data['feels_like']}°C). "
                    f"Humidity is {weather_data['humidity']}%."
                )
                return ApiResponse(
                    response=weather_text,
                    type="weather",
                    additional_data=weather_data
                )
            else:
                return ApiResponse(
                    response="Please specify a city for weather information. For example, 'Weather in London'.",
                    type="text"
                )
        # Check if the message is about time
        elif "time" in message or "what's the time" in message or "current time" in message:
            now_utc = datetime.now(pytz.utc)
            time_str = now_utc.strftime('%Y-%m-%dT%H:%M:%SZ') # ISO 8601 format, Z for UTC
            timezone_str = "UTC"
            
            # You could also try to get the server's local timezone if preferred
            # now_local = datetime.now().astimezone()
            # time_str = now_local.isoformat() # This includes offset like +05:30
            # timezone_str = str(now_local.tzinfo)

            return ApiResponse(
                response="Certainly! Here is the current server time:",
                type="time",
                additional_data={
                    "time": time_str,
                    "timezone": timezone_str
                }
            )
        # Check if the message is about news
        elif "news" in message or "headlines" in message:
            category = None
            query = None
            
            # Extract category or query if present
            if "about " in message:
                query = message.split("about ", 1)[1].strip()
            elif "in " in message:
                category = message.split("in ", 1)[1].strip()
            
            news_data = await get_news_data(query=query, category=category)
            
            if news_data:
                news_text = "Here are the latest headlines:\n\n"
                for i, article in enumerate(news_data, 1):
                    news_text += f"{i}. {article['title']} - {article['source']}\n"
                
                return ApiResponse(
                    response=news_text,
                    type="news",
                    additional_data={"articles": news_data}
                )
            else:
                return ApiResponse(
                    response="I couldn't find any news articles matching your query.",
                    type="text"
                )
        
        # For all other queries, use AI
        response = await generate_ai_response(request.message, session_id)
        
        return ApiResponse(
            response=response,
            type="text",
            additional_data={"session_id": session_id}
        )
    
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error processing chat request: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/weather", response_model=ApiResponse)
async def weather(request: WeatherRequest):
    try:
        weather_data = await get_weather_data(request.city)
        weather_text = (
            f"The current weather in {weather_data['city']} is {weather_data['description']} "
            f"with a temperature of {weather_data['temperature']}°C (feels like {weather_data['feels_like']}°C). "
            f"Humidity is {weather_data['humidity']}%."
        )
        
        return ApiResponse(
            response=weather_text,
            type="weather",
            additional_data=weather_data
        )
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error processing weather request: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/news", response_model=ApiResponse)
async def news(request: NewsRequest):
    try:
        news_data = await get_news_data(
            query=request.query,
            category=request.category,
            country=request.country
        )
        
        if news_data:
            news_text = "Here are the latest headlines:\n\n"
            for i, article in enumerate(news_data, 1):
                news_text += f"{i}. {article['title']} - {article['source']}\n"
            
            return ApiResponse(
                response=news_text,
                type="news",
                additional_data={"articles": news_data}
            )
        else:
            return ApiResponse(
                response="I couldn't find any news articles matching your query.",
                type="text"
            )
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error processing news request: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "services": {
            "ai": GOOGLE_API_KEY is not None,
            "weather": OPENWEATHER_API_KEY is not None,
            "news": NEWS_API_KEY is not None,
        }
    }

# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
