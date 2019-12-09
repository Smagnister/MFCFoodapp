import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';
import { CommonAjaxService } from './common/common-ajax.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public fcm: FCM,
    public ajax: CommonAjaxService

  ) {
    this.initializeApp();
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fcm.getToken().then(token => {
        console.log("initialize app call");
        console.log( token);
      });
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log("onrefreshtoken:" + token);
      });

      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          this.ajax.toast('Receive in background', 'Success');
        } else {
          this.ajax.toast('Receive in foreground', 'Success');
        }
      })
    });
  }

}
