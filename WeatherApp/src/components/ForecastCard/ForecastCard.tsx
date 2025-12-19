type ForecastCardProps = {
  date: string;
  minTemp: number;
  maxTemp: number;
  humidity: number;
  wind: number;
  icon: string;
};

export const ForecastCard = ({
  date,
  minTemp,
  maxTemp,
  humidity,
  wind,
  icon,
}: ForecastCardProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="ForecastCard">
      <p>{date}</p>
      <img src={iconUrl} alt="weather icon" />
      <p>Min: {minTemp}</p>
      <p>Max: {maxTemp}</p>

      <div className="feelings">
        <p>Humidity: {humidity}</p>
        <p>
          <i className="fa-solid fa-wind"></i> {wind}
        </p>
      </div>
    </div>
  );
};
