import { Component, OnInit } from '@angular/core';
import { CommonAjaxService } from 'src/app/common/common-ajax.service';
import { commonvars } from 'src/app/common/commonvars';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.scss'],
})
export class SearchlistComponent implements OnInit {

  Products: any;
  params: any;
  constructor(
    public ajax: CommonAjaxService,
    public vars: commonvars,
    public router: Router,
    public http: HttpClient
  ) {
    this.getSearchProducts();
  }

  ngOnInit() { }

  data = {
    "lat": " 9.944604",
    "lng": "78.826860",
    "radius": "1000"
  };

  getSearchProducts() {
    this.ajax.callAjax('users/searchproducts', this.data, 'post')
      .then((res: any) => {
        console.log("response : " + res);
        if (res != null) {
          this.Products = res;
        } else {
          this.ajax.toast(res, "Success");
        }
      }, (err: any) => {
        console.log("Error : " + err);
      });
  }


  addtocart(id) {
    this.params = {
      "product_id": id
    }

    this.ajax.callAjax('users/addtocart', this.params, 'post')
      .then((res: any) => {
        if(res.status == 1){
          this.ajax.toast(res.msg, "Success");
        }else{
          this.ajax.toast(res.msg, "Success");
        }
        // if (res.status == "1") {
        //   this.ajax.toast(res.msg, "Success");
        // } else {
        //   this.ajax.toast(res.msg, "Success");
        // }
      }, err => {
        console.log("err" + err);
        this.ajax.toast(err, "");
      })
  }

  // async getMyProducts() {
  //   this.http.get('http://localhost/mfc2/users/searchproducts', {
  //     params: {
  //       lat: '9.944604',
  //       lng: '78.826860', 
  //       radius:'100'
  //     },
  //     observe: 'response'
  //   })
  //     .toPromise()
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(console.log);
  // }

}
