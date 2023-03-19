import { appState } from "../AppState.js";
import { sandboxAPI } from "./axiosService.js"


class ImageService {
  async getWallpaper() {
    const res = await sandboxAPI.get('api/images?category=lake')

    appState.wallpaperURL = res.data.largeImgUrl
  }

}

export const imageService = new ImageService()