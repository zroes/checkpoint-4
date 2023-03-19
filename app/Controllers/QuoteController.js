import { appState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"
import { Pop } from "../Utils/Pop.js"

function _drawQuote() {
  document.getElementById('quote').innerText = appState.quote
  document.getElementById('quote-author').innerText = appState.quoteAuthor
}


export class QuoteController {
  constructor() {
    appState.on('quote', _drawQuote)
    this.getQuote()
  }

  async getQuote() {
    try {
      quoteService.getQuote()
    } catch (error) {
      console.error(error)
      Pop.error('error getting quote')
    }
  }
}