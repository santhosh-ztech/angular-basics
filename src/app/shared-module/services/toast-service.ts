import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {
  constructor(private toastController: ToastController) {}
  async createToast(message: string) {
    const toast = await this.toastController.create({
      message,
      cssClass: 'toast-wrapper-container',
      duration: 2000,
    });
    // Present Toast.
    toast.present();
  }
}
