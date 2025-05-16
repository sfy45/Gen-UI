import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const message = formData.get("message") as string

    if (!message) {
      return NextResponse.json({ response: "Please provide a message." })
    }

    // Simple hardcoded responses for testing
    let response = "I'm a simple AI assistant. I can help answer your questions."

    if (message.toLowerCase().includes("weather")) {
      response = "The weather is currently sunny with a temperature of 72°F."
    } else if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
      response = "Hello! How can I help you today?"
    } else if (message.toLowerCase().includes("help")) {
      response = "I can help with general questions, weather information, and more. What would you like to know?"
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in simple-chat API:", error)
    return NextResponse.json({
      response: "Sorry, I encountered an error processing your request.",
    })
  }
}
