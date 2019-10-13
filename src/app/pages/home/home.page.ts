import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonAjaxService } from 'src/app/common/common-ajax.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  FOODDATA: any;
  constructor(
    private http: HttpClient,
    public alertCtrl: AlertController,
    public router: Router, 
    public ajaxs: CommonAjaxService
    ) {
      this.FOODDATA = this.ajaxs.getAllFoods();
      //console.log("List: "+ this.FOODDATA);
     }

  ngOnInit() {
  
  }

  async EnableLocation() {
    const alert = await this.alertCtrl.create({
      header: 'Enable location to find you?',
      buttons: [
        {
          text: 'Deny',
          handler: () => {
            alert.dismiss();
            console.log('Confirm Ok');
          }
        },
        {
          text: 'Allow',
          handler: () => {
            alert.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }
}
