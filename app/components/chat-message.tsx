import ReactMarkdown from "react-markdown";

type ChatMessageProps = {
  message: {
    role: "user" | "assistant";
    content: string;
  };
};

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={`flex ${
        message.role === "assistant" ? "justify-start" : "justify-end"
      } animate-fadeIn transition duration-300 ease-in-out mb-2`}
    >
      <div
        className={`rounded-xl px-4 py-2 max-w-[70%] text-sm shadow-lg whitespace-pre-line ${
          message.role === "assistant"
            ? "bg-gray-200 text-black"
            : "bg-blue-500 text-white"
        }`}
      >
        {message.role === "assistant" ? (
          <ReactMarkdown>{message.content}</ReactMarkdown>
        ) : (
          <span>{message.content}</span>
        )}
      </div>
    </div>
  );
}
