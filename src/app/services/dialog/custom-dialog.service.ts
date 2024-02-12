import { EventEmitter, Injectable, Output } from '@angular/core';
import { Dialog } from '@capacitor/dialog';

@Injectable({
  providedIn: 'root'
})
export class CustomDialogService {

  constructor() { }

  @Output()
  isConfirmed = new EventEmitter

  showAlert = async (title: string, message: string) => {
    await Dialog.alert({
      title: title,
      message: message,
    })
  };

  showConfirm = async (title: string, message: string) => {
    await Dialog.confirm({
      title: title,
      message: message,
    })
    .then((confirmed) => {
      this.isConfirmed.emit(confirmed)
    });
  };

}
