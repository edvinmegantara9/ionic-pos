import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderListPage } from '../order-list/order-list';
/*
  Generated class for the FinishOrder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-finish-order',
  templateUrl: 'finish-order.html'
})
export class FinishOrderPage {
  Order:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Order = [];
    this.Order = navParams.get("order");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishOrderPage');
  }

  backToOrder() {
    this.navCtrl.setRoot(OrderListPage)
  }

}
