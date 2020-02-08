export interface ILatLong {
  lat: number;
  long: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface IWind {
  speed: number;
  deg: number;
}

export interface IPercipitation {
  "1h"?: number;
  "3h"?: number;
}

export interface IRain extends IPercipitation {}

export interface ISnow extends IPercipitation {}

export interface IClouds {
  all: number;
}

export interface ISys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface ICurrentWeatherResponse {
  coord: ILatLong;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: IClouds;
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IForecast {
  dt: number;
  main: IMain;
  weather: IWeather;
  clouds: IClouds;
  wind: IWind;
  rain: IRain;
  snow: ISnow;
  dt_text: string;
}

export interface ICity {
  id: number;
  name: string;
  coord: ILatLong;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface IFiveDayForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: IForecast[];
  city: ICity;
}
