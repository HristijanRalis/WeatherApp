import type { DailyForecast } from "../types/ui";
import type { WeatherResponse } from "../types/weather";

const getWeekDay = (date: string) =>
  new Date(date).toLocaleDateString("en-US", { weekday: "short" });

export const groupedByDay = (daily: WeatherResponse["daily"]): DailyForecast[] => {
  return daily.map((item) => {
    const date = new Date(item.dt * 1000).toISOString().split("T")[0]; 

    return {
      date,
      day: getWeekDay(date), 
      minTemp: item.temp.min,
      maxTemp: item.temp.max,
      avgHumidity: item.humidity,
      avgWind: Math.round(item.wind_speed),
      icon: item.weather[0].icon,
    };
  });
};
