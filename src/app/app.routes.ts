import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';

export const routes: Routes = [
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'product-details',
        component: ProductDetailsComponent
    },
    {
        path: 'favorites',
        component: FavoritesComponent
    },
    {
        path: 'product-page',
        component: ProductPageComponent
    },
    {
        path: 'custom-dialog',
        component: CustomDialogComponent
    }
];
