import { useState } from "react";
import "./App.css";
import { Searchbar } from "./components/SearchBar/Searchbar";
import type { WeatherResponse } from "./types/weather";
import { fetchWeatherByCity } from "./services/weatherApi";
import { ForecastList } from "./components/ForecastList/ForecastList";
import { CurrentWeather } from "./components/CurrentWeatherComponent/CurrentWeather";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { groupedByDay } from "./utils/weather";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

function App() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cityName, setCityName] = useState<string | null>(null);
  const handleSearch = async (city: string) => {
    try {
      setError(null);
      const data = await fetchWeatherByCity(city);
      setWeather(data);
      setCityName(city);
    } catch (err) {
      console.log("Error fetching weather:", err);
      setError("City not found or API key issue!");
      setWeather(null);
      setCityName(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather for 5 days!</h1>
      {/* Search Bar */}
      <Searchbar onSearch={handleSearch} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>{cityName}</h2>
          <CurrentWeather weather={weather.current} />
          <ForecastList daily={groupedByDay(weather.daily)} />
        </div>
      )}
    </div>
  );
}

export default App;
