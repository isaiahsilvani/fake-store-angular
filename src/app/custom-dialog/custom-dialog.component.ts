import { Component } from '@angular/core';
import { Dialog } from '../models/Dialog';
import { CustomDialogService } from '../services/dialog/custom-dialog.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.scss'
})
export class CustomDialogComponent {

  constructor(
    private service: CustomDialogService
  ) {}

  alertTitle = ''
  alertMessage = ''
  
  confirmTitle = ''
  confirmMessage = ''

  showAlert() {
    this.service.showAlert(this.alertTitle, this.alertMessage)
  }

  showConfirm() {
    this.service.showConfirm(this.confirmTitle, this.confirmMessage)
  }

  showClearInput() {
    this.alertTitle = ''
    this.alertMessage = ''
    this.confirmTitle = ''
    this.confirmMessage = ''
  }


}
