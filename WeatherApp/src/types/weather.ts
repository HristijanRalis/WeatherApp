export interface DailyWeather {
  dt: number;
  temp: {
    min: number;
    max: number;
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  humidity: number;
  wind_speed: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

export interface WeatherResponse {
  lat: number;
  long: number;
  timezone: string;
  timezone_offset: number;
  daily: DailyWeather[];
  current: CurrentWeather;
}

export interface WeatherDesc {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CurrentWeather {
  dt: number;
  temp: number;
  humidity: number;
  wind_speed: number;
  weather: WeatherDesc[];
}
