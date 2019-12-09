
import { AlertController, ToastController, ActionSheetController, LoadingController } from '@ionic/angular';
import { commonvars } from './commonvars';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class CommonAjaxService {



  SERVER_RESPONSE: any;
  constructor(public http: HttpClient,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionsheetCtrl: ActionSheetController,
    public commonvar: commonvars,
    public loader: LoadingController,
    public router: Router
  ) { }



  async toast(msg, myclass) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      cssClass: myclass,
    });
    toast.present();
  }
  async alert(msg, title, myclass) {
    if (!myclass) {
      myclass = "secondary";
    }
    const alert = await this.alertCtrl.create({
      header: "Add Address",
      message: msg,
      cssClass: myclass,
      inputs: [
              {
                name: 'street',
                placeholder: 'Street'
              },
              {
                name: 'area',
                placeholder: 'Area',
                type: 'text'
              }, 
              {
                name: 'district',
                placeholder: 'District',
                type: 'text'
              }, 
              {
                name: 'state',
                placeholder: 'State',
                type: 'text'
              }, 
              {
                name: 'pincode',
                placeholder: 'Pincode',
                type: 'text'
              }
            ],
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          // cssClass: 'secondary',
          handler: (res) => {
            this.toast("Address added successfully!", "");
          }
        }
      ]
    });
    await alert.present();
  }
  async alertCallback(msg, title, callback) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: msg,
      buttons: [
        {
          text: 'cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (res) => {
            console.log('alert closed;')
          }
        },

        {
          text: 'Ok',
          handler: (res) => {
            callback();
          }
        }
      ]
    });
    await alert.present();
  }
  async gpsAlert(msg, title, callback, cancelcallBack) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: msg,
      buttons: [
        {
          text: 'cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (res) => {
            console.log('alert closed;')
            cancelcallBack();
          }
        },

        {
          text: 'Ok',
          handler: (res) => {
            callback();
          }
        }
      ]
    });
    await alert.present();
  }

  async actionSheetImage(file, camera) {
    const actionSheet = await this.actionsheetCtrl.create({
      buttons: [{
        text: 'Capture From Camera',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Camera Opening');
          camera.click();
        }
      }, {
        text: 'Choose From Library',
        icon: 'folder',
        handler: () => {
          file.click();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'danger',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  async showLoader() {
    const load = await this.loader.create({
      spinner: "crescent",
      duration: 1000,
      showBackdrop: false,
      translucent: false,
      cssClass: 'loaderBG'

    });
    return await load.present();
  }
  async closeLoader() {
    const load = await this.loader.dismiss();
  }


  callAjax(url, data, method) {
    this.showLoader();
    // var auth = this.commonvar.getToken();
    var URL = this.commonvar.url + url;
    var Ajax: any;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': "Bearer " + this.commonvar.getItem("token")
      })
    };
    if (method == "get") { Ajax = this.http.get(URL, httpOptions); }
    if (method == "post") { Ajax = this.http.post(URL, data, httpOptions); }
    // else if (method == "put") { Ajax = this.http.put(this.commonvar.url + url, data, httpOptions); }

    return new Promise((resolve) => {
      Ajax.subscribe((res: any) => {
        this.closeLoader();
        resolve(res);
      },
        (err: any) => {
          this.closeLoader();
          console.log(err);
        })
    });
  }


  async transformDate(date, formate) {
    return moment(date).format(formate);
  }

}
