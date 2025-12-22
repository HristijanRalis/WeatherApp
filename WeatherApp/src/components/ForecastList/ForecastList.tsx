import { ForecastCard } from "../ForecastCard/ForecastCard";
import type { DailyForecast } from "../../types/ui";
type ForecastListProps = {
  daily: DailyForecast[];
};

export const ForecastList = ({ daily }: ForecastListProps) => {
  return (
    <ul className="ForecastList">
      {daily.map((day) => (
        <li key={day.day}>
          <ForecastCard
            key={day.day}
            day={day.day}
            minTemp={day.minTemp}
            maxTemp={day.maxTemp}
            icon={day.icon}
          />
        </li>
      ))}
    </ul>
  );
};
