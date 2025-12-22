type ForecastCardProps = {
  day:string
  minTemp: number;
  maxTemp: number;
  icon: string;
};

export const ForecastCard = ({
  day,
  minTemp,
  maxTemp,
  icon,
}: ForecastCardProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="ForecastCard">
      <p className="day">{day}</p>
      <img src={iconUrl} alt="weather icon" />
      <p>Min: {minTemp}</p>
      <p>Max: {maxTemp}</p>

    </div>
  );
};
