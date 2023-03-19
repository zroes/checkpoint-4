import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  imageController = new ImageController()
  todoController = new TodoController()
  clockController = new ClockController()
  weatherController = new WeatherController()
  quoteController = new QuoteController()
}

window["app"] = new App();
