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
    public ajaxs: CommonAjaxService) {

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
          name: 'street',
          type: 'text',
          placeholder: 'XXXX',

        },
        {
          name: 'area',
          type: 'text',
          placeholder: 'Mobile number',

        },
        {
          name: 'pincode',
          type: 'text',
          placeholder: 'Email id',

        },
        {
          name: 'state',
          type: 'text',
          placeholder: 'Email id',
        },
        {
          name: 'country',
          type: 'text',
          placeholder: 'Email id',
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

  data = {
    "assigned_store": "58",
    "payment_type": "cash_on_delivery",
    "items": [
      {
        "id": "4",
        "quantity": "3"
      },
      {
        "id": "5",
        "quantity": "2"
      }
    ]
  };

  async placeOrder() {
    this.ajaxs.callAjax('users/order', this.data, 'post')
      .then((res: any) => {
        if (res.status == '1') {
          //this.ajaxs.toast(res.data, 'Success');
          //this.presentAlertPrompt();
          this.openPopupModel();
        } else {
          this.ajaxs.toast(res.data, 'Success');
        }
      }, err => {

      });
  }
}
