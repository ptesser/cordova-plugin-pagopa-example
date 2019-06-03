import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';

@Plugin({
  pluginName: "PagoPA",
  plugin: "cordova-plugin-pagopa",
  pluginRef: "PagoPA",
  repo: "https://github.com/ptesser/cordova-plugin-pagopa.git",
  platforms: ["Android", "iOS"],
})
@Injectable()
export class PagoPaProvider {

  constructor() {
  }

  @Cordova()
  startPayment(paymentId: string): Promise<any> {
    return;
  }
}
