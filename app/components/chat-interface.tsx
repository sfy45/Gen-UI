"use client";
import * as React from "react";
import { ChatMessage } from "./chat-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, MicOff, Send, Sun, Moon, Paperclip } from "lucide-react";
import { useTheme } from "next-themes";
import { WeatherCard } from "./weather-card"; // Assuming this component exists and has correct props
import { NewsCard } from "./news-card"; // Assuming this component exists and has correct props
import { TimeCard } from "./time-card"; // Assuming this component exists and has correct props
import { QuickReplyButton } from "./quick-reply-button";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

// Define a base message structure
interface BaseMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// Specific message types for a discriminated union
interface UserMessage extends BaseMessage {
  role: "user";
}

interface AssistantTypingMessage extends BaseMessage {
  role: "assistant";
  content: "..."; // Typing indicator content
  type: "typing";
}

interface AssistantTextMessage extends BaseMessage {
  role: "assistant";
  type: "text"; // Default message type from assistant
  // additionalData is not expected for standard text messages
}

interface AssistantTimeMessage extends BaseMessage {
  role: "assistant";
  type: "time";
  additionalData: {
    // Made required as TimeCard uses it
    time: string; // ISO string for current time
    timezone?: string;
  };
}

interface AssistantWeatherMessage extends BaseMessage {
  role: "assistant";
  type: "weather";
  additionalData: any; // TODO: Define a specific interface for weather data in this union
}

interface AssistantNewsMessage extends BaseMessage {
  role: "assistant";
  type: "news";
  additionalData: any; // TODO: Define a specific interface for news data in this union
}

type Message =
  | UserMessage
  | AssistantTypingMessage
  | AssistantTextMessage
  | AssistantTimeMessage
  | AssistantWeatherMessage
  | AssistantNewsMessage;

export function ChatInterface() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isListening, setIsListening] = React.useState(false);
  const [sessionId, setSessionId] = React.useState<string>("");
  const [quickReplies, setQuickReplies] = React.useState<string[]>([]);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const recognition = React.useRef<SpeechRecognition | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Initialize session ID
  React.useEffect(() => {
    const storedSessionId = localStorage.getItem("chatSessionId");
    if (storedSessionId) {
      setSessionId(storedSessionId);
    } else {
      const newSessionId = crypto.randomUUID();
      localStorage.setItem("chatSessionId", newSessionId);
      setSessionId(newSessionId);
    }

    // Add welcome message
    setMessages([
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "Hello! I'm your AI assistant. How can I help you today?",
        type: "text",
        timestamp: new Date(),
      },
    ]);

    // Set quick replies
    setQuickReplies([
      "Weather in London",
      "Latest news",
      "Current time",
      "Tell me a joke",
    ]);
  }, []);

  // Initialize speech recognition
  React.useEffect(() => {
    if (
      typeof window !== "undefined" &&
      ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
    ) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = "en-US";

      recognition.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };

      recognition.current.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error(
          "Speech recognition error code:",
          event.error,
          "Message:",
          event.message
        );
        setIsListening(false);
        toast({
          title: "Speech Recognition Error",
          description: `Error: ${event.error}${
            event.message ? ` - ${event.message}` : ""
          }`,
          variant: "destructive",
        });
      };

      recognition.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognition.current) {
        recognition.current.abort();
      }
    };
  }, [toast]);

  // Auto-scroll to bottom when messages change
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleListening = () => {
    if (!recognition.current) {
      toast({
        title: "Speech Recognition Not Supported",
        description: "Your browser doesn't support speech recognition.",
        variant: "destructive",
      });
      return;
    }

    if (isListening) {
      recognition.current.stop();
      setIsListening(false);
    } else {
      recognition.current.start();
      setIsListening(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      toast({
        title: "File selected",
        description: e.target.files[0].name,
        variant: "default",
      });
    }
  };

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && !selectedFile) return;

    const userMessageId = crypto.randomUUID();
    const userMessage: UserMessage = {
      id: userMessageId,
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Show typing indicator
      const typingIndicatorId = crypto.randomUUID();
      const typingMessage: AssistantTypingMessage = {
        id: typingIndicatorId,
        role: "assistant",
        content: "...",
        type: "typing",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, typingMessage]);

      let body: any;
      let headers: any;
      if (selectedFile) {
        body = new FormData();
        body.append("message", input);
        body.append("session_id", sessionId);
        body.append("file", selectedFile);
        headers = undefined; // Let browser set multipart/form-data
      } else {
        body = JSON.stringify({ message: input, session_id: sessionId });
        headers = { "Content-Type": "application/json" };
      }

      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        body,
        headers,
      });

      const data = await res.json();

      // Remove typing indicator
      setMessages((prev) => prev.filter((msg) => msg.id !== typingIndicatorId));

      // Construct the assistant's message with proper typing
      let assistantMessage: Message;
      const commonAssistantProps = {
        id: crypto.randomUUID(),
        role: "assistant" as const,
        content: data.response || "No response.",
        timestamp: new Date(),
      };

      const messageType = data.type || "text";

      switch (messageType) {
        case "time":
          // Assert the structure for time messages
          assistantMessage = {
            ...commonAssistantProps,
            type: "time",
            additionalData:
              data.additional_data as AssistantTimeMessage["additionalData"],
          };
          break;
        case "weather":
          // Assert the structure for weather messages (requires additionalData to match type)
          assistantMessage = {
            ...commonAssistantProps,
            type: "weather",
            additionalData:
              data.additional_data as AssistantWeatherMessage["additionalData"], // This cast is only useful if AssistantWeatherMessage['additionalData'] is a specific type, not 'any'
          };
          break;
        case "news":
          // Assert the structure for news messages (requires additionalData to match type)
          assistantMessage = {
            ...commonAssistantProps,
            type: "news",
            additionalData:
              data.additional_data as AssistantNewsMessage["additionalData"], // This cast is only useful if AssistantNewsMessage['additionalData'] is a specific type, not 'any'
          };
          break;
        default: // "text" or any other unknown type
          assistantMessage = {
            ...commonAssistantProps,
            type: "text",
            // additionalData is not expected for text messages based on refined type
            // If backend sends it anyway, it will be ignored by the type system here.
          };
      }
      setMessages((prev) => [...prev, assistantMessage]);

      // Generate new quick replies based on context
      if (data.type === "weather") {
        setQuickReplies([
          "Weather forecast",
          "Temperature tomorrow",
          "Weather in New York",
        ]);
      } else if (data.type === "news") {
        setQuickReplies([
          "Latest technology news",
          "Sports headlines",
          "Business news",
        ]);
      } else {
        // Default quick replies
        setQuickReplies([
          "Weather in London",
          "Latest news",
          "Current time",
          "Tell me a joke",
        ]);
      }

      setSelectedFile(null);
    } catch (err) {
      console.error("Error sending message:", err);
      // Remove typing indicator if it's still there on error
      setMessages((prev) => prev.filter((msg) => msg.type !== "typing"));
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Sorry, something went wrong. Please try again later.",
          type: "text",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
    // Optionally, submit the form automatically after a quick reply is clicked
    // const form = document.querySelector('form'); // Or get ref to form
    // if (form) {
    //   // Need to set input state and then simulate submit,
    //   // or call sendMessage directly with the reply.
    //   // For simplicity, we'll let the user press send or modify the input.
    // }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="relative max-w-4xl w-full h-[90vh] bg-card rounded-2xl shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Gen-UI Assistant"
              />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">Gen-UI Assistant</h2>
              <p className="text-xs text-muted-foreground">
                Always here to help
              </p>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle {theme === "dark" ? "light" : "dark"} mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Chat window */}
        <div className="flex-1 overflow-y-auto p-4 pb-32 flex flex-col gap-2 max-h-[80vh]">
          {messages.map((msg) => (
            <React.Fragment key={msg.id}>
              {/* Render typing indicator */}
              {msg.role === "assistant" && msg.type === "typing" ? (
                <div className="flex justify-start">
                  <div className="mr-2 flex-shrink-0">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="AI"
                      />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="bg-secondary text-secondary-foreground rounded-xl px-4 py-2 max-w-[70%] text-sm shadow-sm rounded-bl-none">
                    <span className="inline-block animate-pulse">
                      <span className="dot-typing"></span>
                    </span>
                  </div>
                </div>
              ) : // Render specific card components based on type
              msg.role === "assistant" && msg.type === "weather" ? (
                <WeatherCard message={msg} /> // msg is AssistantWeatherMessage here
              ) : msg.role === "assistant" && msg.type === "news" ? (
                <NewsCard message={msg} /> // msg is AssistantNewsMessage here
              ) : msg.role === "assistant" && msg.type === "time" ? (
                <TimeCard message={msg} /> // msg is AssistantTimeMessage here
              ) : (
                // Default rendering for user messages and assistant text messages
                <ChatMessage message={msg} /> // msg is UserMessage | AssistantTextMessage here
              )}
            </React.Fragment>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick replies */}
        {quickReplies.length > 0 && (
          <div className="absolute bottom-16 left-0 w-full px-4 py-2 flex flex-wrap gap-2 justify-center">
            {quickReplies.map((reply, index) => (
              <QuickReplyButton
                key={index}
                text={reply}
                onClick={() => handleQuickReply(reply)}
              />
            ))}
          </div>
        )}

        {/* Input section */}
        <form
          onSubmit={sendMessage}
          className="absolute bottom-0 left-0 w-full p-3 bg-card flex flex-col sm:flex-row gap-2 border-t"
          style={{ zIndex: 10 }}
        >
          <Input
            type="text"
            className="flex-1 rounded-md border border-zinc-700 bg-zinc-800 text-white px-4 py-2 w-full focus:outline-none focus:ring-primary text-base shadow-sm placeholder:text-zinc-400"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading || isListening}
          />
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            id="file-upload"
            onChange={handleFileChange}
            disabled={loading}
          />
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={toggleListening}
                    className={isListening ? "bg-red-100 text-red-500" : ""}
                  >
                    {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isListening ? "Stop" : "Start"} voice input</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={handleFileButtonClick}
                  >
                    <Paperclip size={20} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Attach file</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button
              type="submit"
              variant="default"
              size="default"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition duration-200 min-w-max"
              disabled={loading || (!input.trim() && !selectedFile)}
            >
              <Send size={20} className="mr-2" />
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
