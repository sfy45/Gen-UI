"use client";
import * as React from "react";
import { ChatMessage } from "./chat-message";
import { Button } from "./ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatInterface() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("message", input);
      const res = await fetch("/api/chat", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response || "No response." },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative max-w-2xl w-full h-[80vh] bg-white rounded-2xl shadow-xl flex flex-col">
        {/* Chat window */}
        <div className="flex-1 overflow-y-auto p-4 pb-32 flex flex-col gap-2 max-h-[70vh]">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 py-8 text-lg">
              Start a conversation!
            </div>
          )}
          {messages.map((msg, idx) => (
            <React.Fragment key={idx}>
              <ChatMessage message={msg} />
              {idx < messages.length - 1 && (
                <div className="border-b border-gray-100 my-1" />
              )}
            </React.Fragment>
          ))}
          <div ref={messagesEndRef} />
        </div>
        {/* Input section */}
        <form
          onSubmit={sendMessage}
          className="absolute bottom-0 left-0 w-full p-3 bg-white flex flex-col sm:flex-row gap-2 border-t border-gray-200"
          style={{ zIndex: 10 }}
        >
          <input
            type="text"
            className="flex-1 rounded-md border px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base shadow-sm"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <label className="bg-gray-200 text-sm px-3 py-2 rounded cursor-pointer hover:bg-gray-300 flex items-center min-w-max">
            <input type="file" className="hidden" />
            File
          </label>
          <Button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200 min-w-max"
            disabled={loading || !input.trim()}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
      </div>
    </div>
  );
}
