import { Component } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPwaWithOneSignal';

  constructor(private oneSignal: OneSignal) {
    this.oneSignal.init({
      appId: "your-app-id",
      serviceWorkerParam: {
        scope: '/onesignal'
      },
    });
  }
}
