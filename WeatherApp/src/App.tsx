import { useState } from "react";
import "./App.css";
import { Searchbar } from "./components/SearchBar/Searchbar";
import type { WeatherResponse } from "./types/weather";
import { fetchWeatherByCity } from "./services/weatherApi";
import { ForecastList } from "./components/ForecastList/ForecastList";
import { CurrentWeather } from "./components/CurrentWeatherComponent/CurrentWeather";
import "./index.css";
import { groupedByDay } from "./utils/weather";

function App() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    try {
      setError(null);
      const data = await fetchWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      console.log("Error fetching weather:", err);
      setError("City not found or API key issue!");
      setWeather(null);
    }
  };

  return (
    <div className="App">
      {/* Search Box */}
      <div className="searchBox">
        <Searchbar onSearch={handleSearch} />
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>

      {/* Current Weather */}
      {weather && <CurrentWeather weather={weather.list[0]} />}

      {/* Forecast */}
      {weather && (
        <div className="WeatherDescription">
          <div className="Title">
            <h2>
              {weather.city.name} - {weather.city.country}
            </h2>
          </div>
          <ForecastList daily={groupedByDay(weather.list)} />
        </div>
      )}
    </div>
  );
}

export default App;
