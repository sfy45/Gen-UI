import { ChatInterface } from "./components/chat-interface";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-3xl mx-auto px-4">
        <h1 className="text-center text-2xl font-bold mb-6">
          Gen-UI <span className="text-primary">Gen-UI Assistant</span>{" "}
          <span className="inline-block">🤖</span>
        </h1>
        <ChatInterface />
      </div>
    </main>
  );
}
