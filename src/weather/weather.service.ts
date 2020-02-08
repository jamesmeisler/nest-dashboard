import { Injectable } from "@nestjs/common";
import Axios, { AxiosInstance, AxiosResponse } from "axios";
import { ICurrentWeatherResponse } from "./interfaces/current-weather-respose";
@Injectable()
export class WeatherService {
  apiKey = "6c5bb78b147b693bcd367a79660e4ddc";
  client: AxiosInstance;
  constructor() {
    const instance = Axios.create({
      baseURL: "https://api.openweathermap.org/data/2.5/"
    });
    this.client = instance;
  }

  getCurrentWeather(): Promise<AxiosResponse<ICurrentWeatherResponse>> {
    return this.client.get("weather", {
      params: {
        zip: "36104",
        units: "imperial",
        APPID: this.apiKey
      }
    });
  }

  getFiveDayForecast(): Promise<AxiosResponse<ICurrentWeatherResponse>> {
    return this.client.get("forecast", {
      params: {
        zip: "36104,us",
        units: "imperial",
        APPID: this.apiKey
      }
    });
  }
}
