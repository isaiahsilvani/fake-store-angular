import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  flag = {
    isOnFavorites: false
  }

  getOnFavoritesFlag(): boolean {
    return this.flag.isOnFavorites
  }

  setOnFavoritesFlag(onFavorites: boolean) {
    this.flag.isOnFavorites = onFavorites
  }

}
