import { appState } from "../AppState.js";



function _drawClock() {
  let timeArr = new Date().toLocaleString('en-us').split(',')
  document.getElementById('clock').innerText = timeArr[1]
}


export class ClockController {


  constructor() {
    _drawClock()
    setInterval(_drawClock, 100)
    console.log(appState.time);
  }
}