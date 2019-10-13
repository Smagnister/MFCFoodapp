import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.page.html',
  styleUrls: ['./myorder.page.scss'],
})
export class MyorderPage implements OnInit {

  ongoing: boolean = true;
  completed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
