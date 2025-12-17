import type { WeatherItem } from "../../types/weather";
import { ForecastCard } from "../ForecastCard/ForecastCard";

type ForecastListProps = {
  list: WeatherItem[];
};

type DailyForecast = {
  date: string;
  minTemp: number;
  maxTemp: number;
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

  return Array.from(map.entries()).map(([date, items]) => {
    const temps = items.map((i) => i.main.temp);

    return {
      date,
      minTemp: Math.min(...temps),
      maxTemp: Math.max(...temps),
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
          />
        </li>
      ))}
    </ul>
  );
};
