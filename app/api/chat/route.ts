import { NextResponse } from "next/server"
import axios from "axios"
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai"

// Initialize Google Generative AI
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY

if (!GOOGLE_API_KEY) {
  console.warn("GOOGLE_API_KEY is not set. AI features will be limited.")
}
if (!OPENWEATHER_API_KEY) {
  console.warn("OPENWEATHER_API_KEY is not set. Weather feature will be limited.")
}

const genAI = GOOGLE_API_KEY ? new GoogleGenerativeAI(GOOGLE_API_KEY) : null
const googleModel = genAI ? genAI.getGenerativeModel({
  model: "gemini-1.5-flash-latest", // Or your preferred model
  // Safety settings can be adjusted as needed
  safetySettings: [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  ],
}) : null

async function getWeatherData(city: string): Promise<string> {
  if (!OPENWEATHER_API_KEY) {
    return "I'm sorry, the weather service is currently unavailable (API key missing)."
  }
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric`,
    )
    const data = response.data
    return `The current weather in ${data.name} is ${data.weather[0].description} with a temperature of ${data.main.temp}°C (feels like ${data.main.feels_like}°C). Humidity is ${data.main.humidity}%.`
  } catch (error) {
    console.error("Error fetching weather data:", error)
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return `Sorry, I couldn't find weather data for "${city}". Please check the city name.`
    }
    return "Sorry, I couldn't fetch the weather information at this moment."
  }
}

async function generateGoogleAIResponse(query: string): Promise<string> {
  if (!googleModel) {
    return "I'm sorry, the AI assistant is currently unavailable (API key or model issue)."
  }
  try {
    const result = await googleModel.generateContent(query)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error("Error generating Google AI response:", error)
    return "I'm sorry, I encountered an issue trying to understand that. Could you try rephrasing?"
  }
}

// Updated response generator
async function generateResponse(query: string): Promise<string> {
  const lowerQuery = query.toLowerCase()

  if (lowerQuery.startsWith("weather in ") || lowerQuery === "weather") {
    const city = lowerQuery.startsWith("weather in ") ? lowerQuery.substring("weather in ".length).trim() : "your current location" // You might want to implement location detection or ask
    if (city === "your current location" && lowerQuery === "weather") return "Sure, which city's weather are you interested in? For example, 'weather in London'."
    return getWeatherData(city)
  } else if (lowerQuery.includes("time") || lowerQuery.includes("date")) {
    return `The current date and time is ${new Date().toLocaleString()}.`
  } else {
    // For all other queries, use Google AI
    return generateGoogleAIResponse(query)
  }
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.formData()
    const message = formData.get("message") as string

    if (!message) {
      return NextResponse.json({
        response: "Please provide a message to process.",
      })
    }

    // Generate a response based on the message
    const response = await generateResponse(message) // Now an async call

    // Return the response
    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in chat API:", error)

    // Return a friendly error message
    return NextResponse.json(
      {
        response: "I'm sorry, I encountered an error processing your request. Please try again.",
      },
      { status: 200 },
    ) // Return 200 even for errors to avoid client-side error handling
  }
}
