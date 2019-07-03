import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin, CordovaCheck } from '@ionic-native/core';

@Plugin({
  pluginName: "PagoPA",
  plugin: "cordova-plugin-pagopa",
  pluginRef: "PagoPA",
  repo: "https://github.com/ptesser/cordova-plugin-pagopa.git",
  platforms: ["Android", "iOS"],
})
@Injectable()
export class PagoPaProvider extends IonicNativePlugin {

  constructor() {
    super();
    console.log('[pago-pa.ts] Init');
  }

  @Cordova()
  @CordovaCheck()
  startPayment(paymentId: string): Promise<any> {
    console.log('[pago-pa.ts] Method startPayment is available in the plugin');
    return;
  }
}
