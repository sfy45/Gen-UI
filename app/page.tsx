import { ChatInterface } from "./components/chat-interface";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-3xl mx-auto px-4">
        <h1 className="text-center text-2xl font-bold mb-6">
          Generative UI with <span className="text-primary">LangChain.js</span>{" "}
          <span className="inline-block">🧙⚡</span>
        </h1>
        <ChatInterface />
      </div>
    </main>
  );
}
