import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AddressPopupPage } from 'src/app/pages/address-popup/address-popup.page';
import { CommonAjaxService } from 'src/app/common/common-ajax.service';

@Component({
  selector: 'app-searchdetails',
  templateUrl: './searchdetails.component.html',
  styleUrls: ['./searchdetails.component.scss'],
})
export class SearchdetailsComponent implements OnInit {

  JSONDATA: any;
  qty = 0;
  price = 130;
  constructor(public actionsheet: ActionSheetController,
    public alertCrtl: AlertController, public router: Router,
    public modalCtrl: ModalController, 
    public commonAJAX: CommonAjaxService) {
    this.JSONDATA = commonAJAX.getFoodDetails();
  }

  ngOnInit() { }
  inc() {
    ++this.qty;
  }
  dec() {
    if (this.qty == 0) { } else {
      --this.qty;
    }
  }
  async showActionSheet() {
    const actionSheet = await this.actionsheet.create({
      header: 'Albums',
      // inputs:[{}],
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async openPopupModel() {
    const modal = await this.modalCtrl.create({
      component: AddressPopupPage
    });
    return await modal.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCrtl.create({
      header: 'Add your current address',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'XXXX',

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            this.router.navigateByUrl('orderdetail');
          }
        }
      ]
    });
    await alert.present();
  }
}
