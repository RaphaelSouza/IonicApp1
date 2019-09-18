import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController) {}


  async exibirAlerta() {
    
    const alert = await this.alertController.create({
      header: 'Aula',
      subHeader: 'Aula 2',
      message: 'Mensage padrão.',
      buttons: ['RECUSAR', 'ACEITAR']
    });

    await alert.present();
  }
}
