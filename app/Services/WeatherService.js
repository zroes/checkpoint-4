import { appState } from "../AppState.js"
import { sandboxAPI } from "./axiosService.js"


class WeatherService {
  async getWeather() {
    const res = await sandboxAPI.get('/api/weather')
    appState.temperatureK = res.data.main.temp
    appState.weather_icon = res.data.weather.icon.replace(
      'undefined', res.data.weather[0].icon
    )
  }
  FtoC() {
    appState.temp_C = !appState.temp_C
  }

}

export const weatherService = new WeatherService()