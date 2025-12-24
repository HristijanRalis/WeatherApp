import type { WeatherItem } from "../../types/weather";

type CurrentWEatherProps = {
  weather: WeatherItem;
};

export const CurrentWeather = ({ weather }: CurrentWEatherProps) => {
  const { temp, humidity } = weather.main;
  const { speed } = weather.wind;
  const { main, description, icon } = weather.weather[0];

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="CurrentWeather">
      <h3>{Math.round(temp)}°C</h3>
      <img src={iconUrl} alt={description} />
      <p>
        {main} - {description}
      </p>

      <div className="feelings">
        <p>Humidity: {humidity}%</p>
        <p>Wind speed: {speed} m/s</p>
      </div>
    </div>
  );
};
