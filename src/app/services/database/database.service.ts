import { Injectable, Output, WritableSignal, signal } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Product } from '../models/product-model';
import { Title } from '@angular/platform-browser';

const DB_PRODUCTS = "DB_PRODUCTS";

export interface ProductDto {
  id: string;
  apiId: string,
  title: string;
  category: string,
  description: string,
  image: string,
  price: string,
  rating: string,
  count: string,
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  private db!: SQLiteDBConnection
  private products: WritableSignal<Product[]> = signal<Product[]>([])

  constructor() { }

  async initializePlugin() {
    this.db = await this.sqlite.createConnection(
      DB_PRODUCTS,
      false,
      'no-encryption',
      1,
      false
    )
    
    await this.db.open()

    const schema = `CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      apiId TEXT NOT NULL,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      price TEXT NOT NULL,
      rating TEXT NOT NULL,
      count TEXT NOT NULL
    );`;

    await this.db.execute(schema);
    this.loadProducts();
    return true;
  }

  async loadProducts() {
    console.log('loading products....')
    const products = await (((await this.db.query(`SELECT * FROM products;`)).values || [])).map((item: ProductDto): Product => {
      return this.mapToProductModel(item)
    })
    this.products.set(products)
    console.log(`${products[0].apiId}, ${products[0].title}`)
  }

  // CRUD
  async addProduct(product: ProductDto) {
    console.log("ADD TO PRODUCT!+!!!!!")
    console.log("The id is " + product.id)
    console.log("The apiId is " + product.apiId)
    const query = `INSERT INTO products (title, apiId, category, description, image, price, rating, count) VALUES ("${product.title}","${product.apiId}","${product.category}","${product.description}","${product.image}","${product.price}","${product.rating}","${product.count}")`
    const result = await this.db.query(query)

    this.loadProducts();

    return result;
  }

  /**
   * Method to transform DTO to domain-level
   * @param item The product data transfer object
   * @returns domain-level product model
   */
  private mapToProductModel(item: ProductDto): Product {
    console.log("mapToProduct! the id of the itemDTo is:" + item.id)
    console.log("the apiId is going to be: " + item.apiId)
    return {
      title: item.title,
      id: item.apiId,
      apiId: item.apiId,
      category: item.category,
      rating: { rate: item.rating, count: item.count },
      image: item.image,
      description: item.description,
      price: item.price
    }
  }


  async deleteProduct(title: string) {
    const query = `DELETE FROM products WHERE title="${title}"`
    const result = await this.db.query(query)

    this.loadProducts();
    return result;
  }

  async isProductInDb(title: string): Promise<boolean> {
    console.log("THIS NEEDS TO NOT BE EMPTY: " + Title)
    const query =`SELECT * FROM products WHERE title="${title}"`
    const result = await this.db.query(query)
    console.log("Is product in DB?: " + result.values?.length)
    return result.values?.length != 0;
  }

  getProducts() {
    return this.products();
  }
  
}
