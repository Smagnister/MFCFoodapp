import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
})
export class StarterComponent implements OnInit {
  expression: boolean = false;
  ele: any;
  constructor(public router: Router) { }
  ngOnInit() { }
  // navigate(value) {
  //   if (value == 'SignIn') {
  //     this.router.navigateByUrl("signin");
  //   } else { this.router.navigateByUrl('signup'); }
  // }
}
