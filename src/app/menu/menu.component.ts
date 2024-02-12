import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import ARCore from '../plugins/arcore-plugin';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  /**
   * Method to launch the Android Activity which concerns the ARCore starter app
   */
  async launchARCore() {
    // const { value } = await ARCore.echo({ value: 'Hello World!' });
    // console.log("VALUE: " + value)
    console.log("CLICKED!!!")
    await ARCore.launchARActivity()
  }

}
