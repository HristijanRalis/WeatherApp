import type { WeatherResponse } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

export const fetchWeatherByCity = async (
  city: string
): Promise<WeatherResponse> => {
  try {
    if (!API_KEY) throw new Error("API key is missing!");

    const res = await fetch(
      `${FORECAST_URL}?q=${city.trim()}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) throw new Error("Failed to fetch coordinates!");

    return res.json();
  } catch (err) {
    console.error("fetchWeatherByCity error:", err);
    throw err;
  }
};
