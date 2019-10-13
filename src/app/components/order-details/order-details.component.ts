import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {

  constructor( public alertCrtl: AlertController , public router: Router) { }

  ngOnInit() {}

  
  async orderconfirmation() {
    const alert = await this.alertCrtl.create({
      header: 'Your order placed Successfully. kindly contact the Delivery person to track the food where it is now.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            this.router.navigateByUrl('/tabs/home');
          }
        }
      ]
    });
    await alert.present();
  }
}
