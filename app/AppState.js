
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  wallpaperURL = ''

  /** @type {import('./Models/Todo').Todo[]} */
  todoList = []
  time = Date()

  /** @type {String} */
  quote = 'the pen is midier the the sword :)'
  quoteAuthor = 'me'

  temperatureK = 0
  temp_C = false
  weather_icon = ""


}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
