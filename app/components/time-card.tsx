import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";
import { format } from "date-fns";

type TimeCardProps = {
  message: {
    id: string;
    role: "assistant"; // Time card is always from assistant
    content: string; // Accompanying text from AI, e.g., "Here is the current time"
    type?: "time";
    additionalData?: {
      time: string; // ISO string for current time
      timezone?: string;
    };
    timestamp: Date;
  };
};

export function TimeCard({ message }: TimeCardProps) {
  const { additionalData } = message;
  // Fallback to client's current time if not provided, though backend should ideally provide it.
  const currentTime = additionalData?.time
    ? new Date(additionalData.time)
    : new Date();
  // Fallback to client's timezone if not provided.
  const timezone =
    additionalData?.timezone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className="flex justify-start animate-fadeIn transition duration-300 ease-in-out mb-4">
      <div className="mr-2 flex-shrink-0">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col max-w-[70%]">
        <Card className="bg-secondary text-secondary-foreground rounded-bl-none shadow-sm rounded-xl">
          <CardHeader className="p-4 pb-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <CardTitle className="text-base font-medium">
                Current Time
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            {message.content &&
              message.content !== "..." &&
              !message.content.toLowerCase().includes("current time") && (
                <p className="text-sm mb-2">{message.content}</p>
              )}
            <p className="text-3xl font-bold">
              {format(currentTime, "HH:mm:ss")}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {format(currentTime, "EEEE, MMMM d, yyyy")}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Timezone: {timezone.replace(/_/g, " ")}
            </p>
          </CardContent>
        </Card>
        <span className="text-xs text-muted-foreground mt-1 px-1">
          {format(new Date(message.timestamp), "HH:mm")}
        </span>
      </div>
    </div>
  );
}
