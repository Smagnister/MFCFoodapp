import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonAjaxService } from 'src/app/common/common-ajax.service';
import { commonvars } from 'src/app/common/commonvars';

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
    public ajaxs: CommonAjaxService,
    public vars: commonvars
  ) {
    // this.FOODDATA = this.ajaxs.getAllFoods();
    //console.log("List: "+ this.FOODDATA);
    this.EnableLocation();
  }


  getTopcategories() {

    this.ajaxs.callAjax('users/gettopcategory', '', 'get')
      .then((res: any) => {
        console.log("response : " + JSON.stringify(res));
        if (res.status == "1") {
          this.FOODDATA = res.data;
          console.log(this.FOODDATA);
        } else {
          this.ajaxs.toast(res.msg, "Success");
        }
      }, (err: any) => {
        console.log("response err: " + err);
      });
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
            //this.getTopcategories();
          }
        }
      ]
    });
    await alert.present();
  }

  async navSearch(id, category) {
    this.vars.Cat_Id = id;
    this.vars.Cat_Name = category;
    this.router.navigateByUrl('/search-list');
  }
}

// [routerLink]="['/search-list']"