import type { WeatherItem } from "../../types/weather";

type CurrentWEatherProps = {
  weather: WeatherItem;
};

export const CurrentWeather = ({ weather }: CurrentWEatherProps) => {
  const { temp, humidity } = weather.main;
  const { speed } = weather.wind;
  const { main, description, icon } = weather.weather[0];

  const bgColor =
    main === "Clear"
      ? "#f9d71c"
      : main === "Clouds"
      ? "#a0a0a0"
      : main === "Rain"
      ? "#4a90e2"
      : "#83a0e7";

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div
      className="CurrentWeather"
      style={{
        backgroundColor: bgColor,
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <h3>Current Temperature: {Math.round(temp)}</h3>
      <img src={iconUrl} alt={description} />
      <p>
        {main} - {description}
      </p>
      <p>Humidity: {humidity}</p>
      <p>Wind speed: {speed} m/s</p>
      
    </div>
  );
};
