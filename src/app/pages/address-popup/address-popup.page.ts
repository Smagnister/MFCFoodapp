import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-address-popup',
  templateUrl: './address-popup.page.html',
  styleUrls: ['./address-popup.page.scss'],
})
export class AddressPopupPage implements OnInit {

  constructor(public alertCrtl: AlertController) { }

  ngOnInit() {
  }

}
