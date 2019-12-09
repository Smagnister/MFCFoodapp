import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { commonvars } from 'src/app/common/commonvars';
import { CommonAjaxService } from 'src/app/common/common-ajax.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  ImgURL: any;
  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }


  constructor(
    public camera: Camera,
    public vars: commonvars,
    public ajax: CommonAjaxService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  data = {
    "username": "",
    "upload_image": {
      "image": this.vars.imageBASE64,
      "type": "jpg"
    }
  }

  updateProfilepic() {
    console.log("Edit profile");
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.ImgURL = base64Image;
    }, (err) => {

      console.log(err);
      // Handle error
    });
  }

  // public function updateprofileinfo()/

  updateProfiletoServer() {
    this.ajax.callAjax('users/updateprofileinfo', this.data, 'post')
      .then((res: any) => {

        if (res.status == '1') {
          this.ajax.toast(res.msg, "Success");
          this.router.navigateByUrl("/tabs/home");
        } else {
          this.ajax.toast(res.msg, "Success");
        }
      }, (err: any) => {
        console.log("error" + err);
      });
  }

}
