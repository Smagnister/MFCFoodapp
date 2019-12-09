import { Component, OnInit } from '@angular/core';
import { CommonAjaxService } from 'src/app/common/common-ajax.service';
import { Router } from '@angular/router';
import { commonvars } from 'src/app/common/commonvars';

@Component({
  selector: 'app-enterotp',
  templateUrl: './enterotp.component.html',
  styleUrls: ['./enterotp.component.scss'],
})
export class EnterotpComponent implements OnInit {

  otp: any;
  constructor(
    public ajax: CommonAjaxService,
    public router: Router,
    public vars: commonvars
  ) { }

  ngOnInit() { }


  verifyOTP() {

    // this.router.navigateByUrl("profilesettings");
    var data = {
      "id": this.vars.Cat_Id,
      "otp": this.otp
    };


    if (data.otp == null || data.otp == "") {
      this.ajax.toast("Otp cannot be blank", "Success");
      return false;
    }

    if (data.otp.length < 6) {
      this.ajax.toast("Given otp should be valid", "Success");
      return false;
    }
    console.log("enter otp service call");
    this.ajax.callAjax('users/verifyotp', data, "post")
      .then((res: any) => {
        if (res.success) {
          this.ajax.toast(res.msg, "success");
          this.vars.setItem("token", res.data.token);
          this.router.navigateByUrl("profilesetting");
        } else {
          this.ajax.toast(res.msg, "success");
        }
      }, (err: any) => {
        this.ajax.toast(err, "success");
      });

  }

}
