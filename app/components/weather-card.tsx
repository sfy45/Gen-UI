import { Card, CardContent } from "@/components/ui/card"

type WeatherCardProps = {
  message: {
    id: string
    role: "user" | "assistant"
    content: string
    type?: string
    additionalData?: any
    timestamp: Date
  }
}

export function WeatherCard({ message }: WeatherCardProps) {
  const weather = message.additionalData || {}

  return (
    <div className="flex justify-start mb-4">
      <Card className="max-w-[300px] overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{weather.city}</h3>
                <p className="text-sm opacity-90">{weather.country}</p>
              </div>
              <div className="text-3xl font-bold">{Math.round(weather.temperature)}°C</div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium capitalize">{weather.description}</p>
                <p className="text-sm text-muted-foreground">Feels like: {Math.round(weather.feels_like)}°C</p>
              </div>
              {weather.icon && (
                <img
                  src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={weather.description}
                  width={50}
                  height={50}
                />
              )}
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
              <div>
                <p className="text-muted-foreground">Humidity</p>
                <p className="font-medium">{weather.humidity}%</p>
              </div>
              <div>
                <p className="text-muted-foreground">Wind</p>
                <p className="font-medium">{weather.wind_speed} m/s</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
