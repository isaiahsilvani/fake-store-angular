import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { SplashScreen } from '@capacitor/splash-screen';
import { DatabaseService } from './services/database/database.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MenuComponent, 
    ProductDetailsComponent,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

  title = "angular-test-isaiah"

  constructor(
    private database: DatabaseService
  ){
    this.initApp()
  }

  async initApp() {
    await this.database.initializePlugin();
    SplashScreen.hide()
  }

}

