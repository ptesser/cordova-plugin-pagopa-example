import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PagoPaProvider } from '../../providers/pago-pa/pago-pa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public readonly navCtrl: NavController,
    private readonly pagoPAProvide: PagoPaProvider,
  ) {
  }

  startPaymentHandler() {
    console.log('[home.ts] startPaymentHandler');
    this.pagoPAProvide.startPayment('1')
      .then((success) => {
        alert(success);
      })
      .catch((error) => alert(error));
  }
}
