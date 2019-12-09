import { Component, OnInit } from '@angular/core';
import { CommonAjaxService } from 'src/app/common/common-ajax.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  ProductsRes: any;
  norecords: any;
  constructor(
    public ajax: CommonAjaxService,
    public router: Router
  ) {
    this.getAllproducts();
  }

  ngOnInit() {
   // this.getAllproducts();
  }
  async getAllproducts() {
    console.log("constructor call");
    this.ajax.callAjax('users/getcart', null, 'get')
      .then((res: any) => {
        if (res.status == 0) {
          this.ProductsRes = res.data;
        } else {
          //this.ProductsRes = true;
          this.norecords= true;
        }

      }, err => {
        console.log(err);
      });
  }
}
