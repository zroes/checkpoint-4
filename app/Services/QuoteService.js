import { appState } from "../AppState.js"
import { sandboxAPI } from "./axiosService.js"


class QuoteService {
  async getQuote() {
    const res = await sandboxAPI.get('/api/quotes')
    console.log(res.data);
    appState.quoteAuthor = `-${res.data.author}`
    appState.quote = res.data.content
  }


}

export const quoteService = new QuoteService()