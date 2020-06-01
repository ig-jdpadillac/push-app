import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(
    private oneSignal: OneSignal
  ) { }

  public configuracionInicial(): void {
    this.oneSignal.startInit('5cfe0060-8142-4960-a4f5-47a45fecc439', '903539745749');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      console.log('Notificacion recibida', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      console.log('notificacion abierta', noti);
    });
    this.oneSignal.endInit();
  }
}
