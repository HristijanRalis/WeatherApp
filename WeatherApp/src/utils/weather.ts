import type { DailyForecast } from "../types/ui";
import type { WeatherItem, WeatherResponse } from "../types/weather";

const getWeekDay = (date: string) =>
  new Date(date).toLocaleDateString("en-US", { weekday: "short" });

export const groupedByDay = (list: WeatherItem[]): DailyForecast[] => {
  const map = new Map<string, WeatherItem[]>();

  list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!map.has(date)) map.set(date, []);
    map.get(date)!.push(item);
  });
  return Array.from(map.entries()).map(([date, items]) => {
    const temps = items.map((i) => i.main.temp);

    return {
      date,
      day: getWeekDay(date),
      minTemp: Math.round(Math.min(...temps)),
      maxTemp: Math.round(Math.max(...temps)),
      avgHumidity: Math.round(
        items.reduce((s, i) => s + i.main.humidity, 0) / items.length
      ),
      avgWind: Math.round(
        items.reduce((s, i) => s + i.wind.speed, 0) / items.length
      ),
      icon: items[0].weather[0].icon,
    };
  });
};
