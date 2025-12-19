export interface WeatherItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: { main: string; icon: string; description: string }[];
  wind: {
    speed: number;
  };
}

export interface WeatherResponse {
  list: WeatherItem[];
  city: {
    name: string;
    country: string;
  };
}
