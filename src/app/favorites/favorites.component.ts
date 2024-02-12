import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DatabaseService } from '../services/database/database.service';
import { Product } from '../services/models/product-model';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlagService } from '../services/flag/flag.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [ProductDetailsComponent, CommonModule, FormsModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {

  constructor(
    private service: DatabaseService,
    private flags: FlagService
  ){}

  favoriteProducts: Product[] = []

  ngOnInit(): void {
    this.flags.setOnFavoritesFlag(true)
    this.favoriteProducts = this.service.getProducts()
  }

  

}
