import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/product.service';
import { Product } from '../services/models/product-model';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';
import { FlagService } from '../services/flag/flag.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductDetailsComponent, CommonModule, FormsModule, SpinnerComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  constructor(
    private activatedRouter: ActivatedRoute,
    private service: ProductService,
    private flags: FlagService
  ) {}

  products: Product[] = []
  isLoading: boolean = false

  ngOnInit(): void {
    console.log("INIT products page")
    this.flags.setOnFavoritesFlag(false)
    console.log(this.flags.getOnFavoritesFlag())
    this.isLoading = true
    this.service.getProducts(this.activatedRouter.snapshot.queryParams['category'])
    this.initObservers()
  }

  initObservers() {
    this.service.products.subscribe({
      next: (products: Array<Product>) => {
        this.isLoading = false
        this.products = products
      }
    })
  }

}
