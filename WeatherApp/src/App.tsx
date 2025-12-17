import { useState } from "react";
import "./App.css";
import { Searchbar } from "./components/SearchBar/Searchbar";
import type { WeatherResponse } from "./types/weather";
import { fetchWeatherByCity } from "./services/weatherApi";
import { ForecastList } from "./components/ForecastList/ForecastList";

function App() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const handleSearch = async (city: string) => {
    try {
      setError(null);
      const data = await fetchWeatherByCity(city);
      setWeather(data);

      console.log("Weather fetched for city", city);
      console.log(data);
    } catch (err) {
      console.log("Error fetching weather:", err);
      setError("City not found or API key issue!");
      setWeather(null);
    }
  };
  return (
    <div className="App">
      <h1>Weather for 5 days !</h1>
      {/* Search Bar */}
      <Searchbar onSearch={handleSearch} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>
            {weather.city.name}, {weather.city.country}
          </h2>
          <ul>
            <ForecastList list={weather.list} />
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
