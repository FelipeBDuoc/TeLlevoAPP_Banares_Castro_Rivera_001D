import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async Inputs() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Correo',
        },
        {
          placeholder: 'Contraseña (Máximo 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
      ],
    });

    await alert.present();
  }
}
