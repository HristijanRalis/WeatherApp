import type { WeatherResponse } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

export const fetchWeatherByCity = async (
  city: string
): Promise<WeatherResponse> => {
  try {
    if (!API_KEY) {
      throw new Error("API key is missing!");
    }

    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    console.log("Fetching URL:", url);

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("City not found!");
      }
      if (response.status === 401) {
        throw new Error("Invalid API key!");
      }

      throw new Error("Failed to fetch weather data!");
    }

    const data: WeatherResponse = await response.json();
    console.log("API response", data);
    return data;
  } catch (err) {
    console.log("fetchWEatherByCity", err);

    throw err;
  }
};
