import { NextResponse } from "next/server"

export async function GET() {
  // Check if environment variables are set (don't expose the actual values)
  const envStatus = {
    GOOGLE_AI_API_KEY: !!process.env.GOOGLE_AI_API_KEY,
    OPENWEATHER_API_KEY: !!process.env.OPENWEATHER_API_KEY,
    LANGCHAIN_API_KEY: !!process.env.LANGCHAIN_API_KEY,
  }

  return NextResponse.json({
    status: "Environment variables check",
    variables: envStatus,
    timestamp: new Date().toISOString(),
  })
}
