# Gen-UI Application

An AI-powered chat application with a Python FastAPI backend and Next.js frontend.

## Features

- 🤖 AI-powered chat interface using Google AI
- 🌦️ Weather information integration
- 📰 News updates
- 🔊 Voice input support
- 🌓 Dark/light mode toggle
- 💬 Conversation memory with LangChain
- 🚀 Quick reply suggestions

## Architecture

### Backend (Python FastAPI)

The backend serves as an API gateway that:
- Manages API keys securely
- Routes requests to external services
- Provides clean endpoints for AI responses, weather data, and news updates
- Incorporates LangChain for conversation context and memory

### Frontend (Next.js)

The frontend provides:
- User-friendly, interactive chat interface
- Chat bubbles with avatars
- Typing indicators
- Quick reply buttons
- Voice input using Web Speech API
- Theme toggle (light/dark mode)

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
\`\`\`bash
cd backend
\`\`\`

2. Create a virtual environment:
\`\`\`bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
\`\`\`

3. Install dependencies:
\`\`\`bash
pip install -r requirements.txt
\`\`\`

4. Create a `.env` file with your API keys:
\`\`\`
GOOGLE_AI_API_KEY=your_google_ai_key
OPENWEATHER_API_KEY=your_openweather_key
NEWS_API_KEY=your_news_api_key
\`\`\`

5. Run the FastAPI server:
\`\`\`bash
uvicorn main:app --reload
\`\`\`

### Frontend Setup

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Backend Deployment

You can deploy the FastAPI backend using Docker:

\`\`\`bash
cd backend
docker build -t genui-backend .
docker run -p 8000:8000 genui-backend
\`\`\`

### Frontend Deployment

Deploy the Next.js frontend to Vercel:

\`\`\`bash
vercel
\`\`\`

## License

MIT
