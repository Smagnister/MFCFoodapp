import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CommonAjaxService } from 'src/app/common/common-ajax.service';
import { commonvars } from 'src/app/common/commonvars';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-popup',
  templateUrl: './address-popup.page.html',
  styleUrls: ['./address-popup.page.scss'],
})
export class AddressPopupPage implements OnInit {

  Addrs: any;
  constructor(
    public alertCrtl: AlertController,
    public ajax: CommonAjaxService,
    public vars: commonvars,
    public http: HttpClient,
    public router: Router
  ) {
    this.http.get(this.vars.addressURL)
      .subscribe((res: any) => {
        console.log(res);
        this.Addrs = res;
      }, (err: any) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }
  nav() {
    this.router.navigateByUrl('orderdetail');
  }

}


// this.ajax.callAjax(vars.addressURL,null, 'get')
// .then((res:any) => {
//   this.Addrs = res;
// }, (err: any ) => {
//   console.log(err);
// });