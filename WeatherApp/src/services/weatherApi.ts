import type { WeatherResponse } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/3.0/onecall";

const GEOCODE_URL = "https://api.openweathermap.org/geo/1.0/direct";
export const fetchWeatherByCity = async (
  city: string
): Promise<WeatherResponse> => {
  try {
    if (!API_KEY) throw new Error("API key is missing!");

    const geoUrl = `${GEOCODE_URL}?q=${city.trim()}&limit=1&appid=${API_KEY}`;
    const geoRes = await fetch(geoUrl);

    if (!geoRes.ok) throw new Error("Failed to fetch coordinates!");

    const geoData = await geoRes.json();
    if (!geoData.length) throw new Error("City not found");

    const { lat, lon } = geoData[0];

    const weatherUrl = `${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY}`;
    const weatherRes = await fetch(weatherUrl);

    if (!weatherRes.ok) throw new Error("Failed to fetch weather data!");

    const data: WeatherResponse = await weatherRes.json();
    console.log("Weather Data:", data);
    return data;
  } catch (err) {
    console.error("fetchWeatherByCity error:", err);
    throw err;
  }
};
