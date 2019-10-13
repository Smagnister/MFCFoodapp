import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR, ReturnStatement } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CommonAjaxService {

  FoodDetailsAPI: any = "http://www.json-generator.com/api/json/get/bVicPMeeHm?indent=2";
  FoodsAPI: any = "http://www.json-generator.com/api/json/get/bOpdxnUcbS?indent=2";

  SERVER_RESPONSE: any;
  constructor(public http: HttpClient) { }

  getAllFoods(): any {
    this.http.get(this.FoodsAPI).subscribe((respose: any) => {
      console.log("Server response : " + JSON.stringify(respose));
      this.SERVER_RESPONSE = JSON.stringify(respose);
    }, (error) => {
      console.log(error);
    })
    return this.SERVER_RESPONSE;
  }
  getFoodDetails(): any {
    this.http.get(this.FoodDetailsAPI).subscribe((response: any) => {
      console.log("Details :" + JSON.stringify(response));
      this.SERVER_RESPONSE = JSON.stringify(response);
    }, (err) => {
      console.log("Error: " + err)
    })
    return this.SERVER_RESPONSE;
  }

}
