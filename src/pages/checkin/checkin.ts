import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { OrderListPage } from '../order-list/order-list';

import { OrderService } from '../../providers/order';

/*
  Generated class for the Checkin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html'
})
export class CheckinPage {
  number: any = "";
  numberParam: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public service: OrderService) {
    this.numberParam = navParams.get("pin");
    this.service.setOrperator(this.navParams.get("operator_id"))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinPage');
  }

  tapNumber(number) {
    this.number = this.number + number

    if (this.number.length == 4) {
      if (this.number == this.numberParam) {
        this.menu.swipeEnable(true)
        this.navCtrl.setRoot(OrderListPage)
      } else {
        alert("login salah")
        this.number = ""
      }
    }
  }

}
