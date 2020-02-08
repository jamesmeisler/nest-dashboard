import { Controller, Get } from "@nestjs/common";
import { WeatherService } from "./weather.service";

@Controller("weather")
export class WeatherController {
  constructor(private weatherService: WeatherService) {}
  @Get()
  async getWeather(): Promise<any> {
    const response = await this.weatherService.getCurrentWeather();
    return response.data;
  }

  @Get("forecast")
  async getForecast(): Promise<any> {
    const response = await this.weatherService.getFiveDayForecast();
    return response.data;
  }
}
