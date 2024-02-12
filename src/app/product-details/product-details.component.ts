import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatabaseService, ProductDto } from '../services/database/database.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlagService } from '../services/flag/flag.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private service: DatabaseService,
    private flags: FlagService
  ){}

  ngOnInit(): void {
    this.isProductFavorited()
  }

  display = true
  isFavorited = false
  
  toggleButton() {
    if (this.isFavorited) {
      this.deleteProduct()
      this.hideComonentOnDelete()
    } else {
      this.saveProduct()
    }
  }

  /**
   * Method to hide the comonent from the UI when user deletes a product from his favorites.
   * In Angular, apparently we cannot manually destroy components
   */
  private hideComonentOnDelete() {
    if (this.flags.getOnFavoritesFlag()) {
      this.display = false
    }
  }

  async saveProduct() {
    this.isFavorited = true
    this.service.addProduct(
      {
        id: '',
        apiId: this.apiId,
        title: this.title,
        description: this.description,
        category: this.category,
        image: this.imageUrl,
        rating: this.rate,
        count: this.count,
        price: this.price
      }
    )
  }

  async deleteProduct() {
    this.isFavorited = false
    this.service.deleteProduct(this.title)
  }

  async isProductFavorited() {
    this.isFavorited = await this.service.isProductInDb(this.title)
  }
  
  @Input()
  title = ''
  @Input()
  imageUrl = ''
  @Input()
  category = ''
  @Input()
  description = ''
  @Input()
  price = ''
  @Input()
  rate = ''
  @Input()
  count = ''
  @Input()
  apiId = ''

}
