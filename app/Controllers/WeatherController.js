import { appState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"


function _drawWeather() {
  let temp = (appState.temperatureK - 273.0)
  if (!appState.temp_C)
    temp = temp * 9 / 5 + 32
  document.getElementById('weather').innerHTML =
    `
    <div class="glass-card p-2 py-4 m-2 mx-5">
      <h3 class="text-light"> ${temp.toFixed(1)}˚ ${appState.temp_C ? 'C' : 'F'}</h3>
      <img class="" src="${appState.weather_icon}" alt="">
    </div>
    `
}


export class WeatherController {
  constructor() {
    this.getWeather()
    appState.on('weather_icon', _drawWeather)
    appState.on('temp_C', _drawWeather)
  }

  async getWeather() {
    await weatherService.getWeather()
  }

  FtoC() {
    weatherService.FtoC()
  }
}