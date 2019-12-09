import { Component, OnInit } from '@angular/core';
import { CommonAjaxService } from 'src/app/common/common-ajax.service';
import { commonvars } from 'src/app/common/commonvars';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  loginError: any;
  Mbenum: any;
  constructor(
    public http: HttpClient,
    public ajax: CommonAjaxService,
    public router: Router,
    public vars: commonvars
  ) {
    this.vars.Cat_Id = "";
    this.vars.Cat_Name = "";
    this.vars.Cat_Otp = "";
  }
  ngOnInit() { }


  checkLogin() {
    console.log("mobile numb" + this.Mbenum);
    // console.log("login data: " + this.login);
    if (this.Mbenum == null || this.Mbenum == "") {
      this.ajax.toast("Mobile number cannot be blank", "Success");
      return;
    }

    var login = {
      "mobile": this.Mbenum,
      "role": "user"
    };
    this.ajax.callAjax('users/login', login, "post")
      .then((res: any) => {
        console.log("res ", res)
        if (res.status == "1") {
          this.vars.Cat_Id = res.data.id;
          this.vars.Cat_Otp = res.data.otp;
          // this.vars.setItem("id", res.data.id);
          // this.ajax.toast(res.data.otp, "Success");
          // console.log("OTP : " + res.data.otp);
          // this.vars.setItem("user_id", res.data.user_id);
          this.ajax.toast(res.msg, 'success');
          this.router.navigateByUrl('/enterotp');
        } else {
          this.ajax.toast(res.msg, 'failure');
        }
        // if (res.errorMessage) {
        //  console.log(res.errorMessage)
        //   return;
        // } else {

        // this.commonvar.setToken(res.access_token, this.login.phoneNo);
        // this.commonservice.toast("Login Successfully !", 'success');
        // this.nav.navigateByUrl('/dashboard');
        // this.commonscript.setUser("from login");
        // }
      }, (err) => {
        console.log("err ", err)
      });
  }
}
