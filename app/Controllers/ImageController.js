import { appState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";


function _drawWallpaper() {
  document.body.style.backgroundImage = `url(${appState.wallpaperURL})`
}

export class ImageController {
  constructor() {
    console.log(":)");
    appState.on('wallpaperURL', _drawWallpaper)
    this.getWallpaper()
  }

  async getWallpaper() {
    try {
      await imageService.getWallpaper()
    } catch (error) {

    }
  }
}