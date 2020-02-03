import { Component } from '@angular/core';
import { NavController, NavParams, MenuController  } from 'ionic-angular';
import { CheckinPage } from '../checkin/checkin';

import { OrderService } from '../../providers/order';

/*
  Generated class for the Operator page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-operator',
  templateUrl: 'operator.html'
})
export class OperatorPage {
  operators: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public service: OrderService) {
    this.operators = this.service.getListOperator();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperatorPage');
    this.menu.swipeEnable(false);
  }


  checkinTapped(data) {
    this.navCtrl.push(CheckinPage, data)
  }




}
