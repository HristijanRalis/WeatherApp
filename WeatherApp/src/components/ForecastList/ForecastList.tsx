import type { WeatherItem } from "../../types/weather";
import { ForecastCard } from "../ForecastCard/ForecastCard";

type ForecastListProps = {
  list: WeatherItem[];
};

type DailyForecast = {
  date: string;
  minTemp: number;
  maxTemp: number;
  avgHumidity: number;
  avgWind: number;
  icon: string;
};

const groupedByDay = (list: WeatherItem[]): DailyForecast[] => {
  const map = new Map<string, WeatherItem[]>();
  list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!map.has(date)) {
      map.set(date, []);
    }

    map.get(date)!.push(item);
  });

  return Array.from(map.entries())
    .slice(0, 5)
    .map(([date, items]) => {
      const temps = items.map((i) => i.main.temp);
      const humidities = items.map((i) => i.main.humidity);
      const winds = items.map((i) => i.wind.speed);

      return {
        date,
        minTemp: Math.min(...temps),
        maxTemp: Math.max(...temps),
        avgHumidity: Math.round(humidities.reduce((a, b) => a + b, 0)),
        avgWind: Math.round(winds.reduce((a, b) => a + b, 0)),
        icon: items[0].weather[0].icon,
      };
    });
};
export const ForecastList = ({ list }: ForecastListProps) => {
  const dailyForecast = groupedByDay(list);
  return (
    <ul className="ForecastList">
      {dailyForecast.map((day) => (
        <li key={day.date}>
          <ForecastCard
            key={day.date}
            date={day.date}
            minTemp={day.minTemp}
            maxTemp={day.maxTemp}
            humidity={day.avgHumidity}
            wind={day.avgWind}
            icon={day.icon}
          />
        </li>
      ))}
    </ul>
  );
};
