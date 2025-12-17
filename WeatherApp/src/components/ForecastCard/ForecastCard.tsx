import type { WeatherItem } from "../../types/weather";

type ForecastCardProps = {
  date: string;
  minTemp: number;
  maxTemp: number;
};

export const ForecastCard = ({ date, minTemp, maxTemp }: ForecastCardProps) => {
  return (
    <div className="ForecastCard">
      <p>{date}</p>
      <p>Min: {minTemp}</p>
      <p>Max: {maxTemp}</p>
    </div>
  );
};
