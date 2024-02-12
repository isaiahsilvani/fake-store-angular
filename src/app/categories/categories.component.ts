import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/product.service';
import { CommonModule } from '@angular/common';
import { Category } from '../services/models/category-model';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, SpinnerComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  
  constructor(
    private service: ProductService
  ) {}

  categories: Array<Category> = []
  isLoading: boolean = false

  ngOnInit(): void {
    this.isLoading = true
    this.initObservers()
    this.service.getCategories()
  }

  initObservers() {
    // observe the categories response
    this.service.categories.subscribe({
      next: (categories: Array<Category>) => {
        console.log(categories)
        this.categories = categories
        this.isLoading = false
      }
    })
  }

}
