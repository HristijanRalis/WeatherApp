import type { WeatherResponse } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

export const fetchWeatherByCity = async (
  city: string
): Promise<WeatherResponse> => {
 
    if(!API_KEY){
        throw new Error("API key is missing!");
    }

    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    console.log("Fetching URL:", url);

    const response = await fetch(url)

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data: WeatherResponse = await response.json();
  console.log("API Response:", data);
  return data;
};
