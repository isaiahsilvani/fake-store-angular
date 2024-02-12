import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private service: HttpClient
  ) { }

    private base_url = "https://fakestoreapi.com"
    private categories_endpoint = "/products/categories"
    private products_endpoint = "/products/category"

    @Output()
    categories = new EventEmitter()
    
    @Output()
    products = new EventEmitter()

    product = []

    getCategories() {
      this.fetchAndEmit(this.base_url + this.categories_endpoint, this.categories)
    }

    getProducts(category: string) {
      this.fetchAndEmit(this.base_url + this.products_endpoint + `/${category}`, this.products)
    }

    private fetchAndEmit(url:string, event: EventEmitter<any>) {
      this.service.get(url)
        .subscribe({
          next: (result) => {
            event.emit(result)
          },
          error: (error) => {
            console.error(error)
          }
      })
    }

}
