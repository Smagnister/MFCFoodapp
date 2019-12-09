import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonAjaxService } from 'src/app/common/common-ajax.service';
import { commonvars } from 'src/app/common/commonvars';

@Component({
  selector: 'app-profilesettings',
  templateUrl: './profilesettings.component.html',
  styleUrls: ['./profilesettings.component.scss'],
})
export class ProfilesettingsComponent implements OnInit {
  username: any;
  constructor(
    public router: Router,
    public ajaxs: CommonAjaxService,
    public vars: commonvars
  ) { }


  ngOnInit() { }

  updateProfile() {
    var data = {
      "username": this.username,
      "uploadimage": {
        "image": this.vars.imageBASE64,
        "type": "png"
      }
    }
    this.ajaxs.callAjax('users/updateuser', data, 'post')
      .then((res: any) => {
        console.log(res);
      }, err => {
        console.log("error" + err);
      });
  }

}
