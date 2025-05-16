import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"

type NewsCardProps = {
  message: {
    id: string
    role: "user" | "assistant"
    content: string
    type?: string
    additionalData?: any
    timestamp: Date
  }
}

export function NewsCard({ message }: NewsCardProps) {
  const articles = message.additionalData?.articles || []

  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[90%]">
        <h3 className="text-lg font-medium mb-2">Latest News</h3>
        <div className="space-y-3">
          {articles.map((article: any, index: number) => (
            <Card key={index} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {article.image_url && (
                  <div className="md:w-1/3 h-[120px] overflow-hidden">
                    <img
                      src={article.image_url || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=120&width=120"
                      }}
                    />
                  </div>
                )}
                <div className={article.image_url ? "md:w-2/3 p-4" : "p-4"}>
                  <CardTitle className="text-base">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-1">
                    {article.description || "No description available"}
                  </CardDescription>
                  <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                    <span>{article.source}</span>
                    <span>{format(new Date(article.published_at), "MMM d, yyyy")}</span>
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm mt-2 inline-block hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
