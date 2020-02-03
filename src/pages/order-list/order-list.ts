import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { Order } from '../order/order';
import { OrderDetailPage } from '../order-detail/order-detail';

import { OrderService } from '../../providers/order';

/*
  Generated class for the OrderList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-list',
  styles: ['order-list.scss'],
  templateUrl: 'order-list.html'
})
export class OrderListPage {
  status:string="";
  optionFlag: boolean = false;
  list_order:Array<any> = [];
  message:boolean=false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public service: OrderService, 
              public alertCtrl: AlertController) {

    this.init()
  }

  init() {
    if (localStorage.getItem('data')) {
      this.list_order = JSON.parse(localStorage.getItem('data'))
      for (var i=0; i<this.list_order.length; i++) {
        if (this.list_order[i].status == 'PENDING') {
          this.message = true
        }
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderListPage');
  }

  hapusOrderTapped(no_order:number) {
    let confirm = this.alertCtrl.create({
      message: 'Apakah anda yakin akan menghapus Order ini?',
      buttons: [
        {
          text: 'TIDAK',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'YAKIN',
          handler: () => {
            console.log('Agree clicked');
            this.hapus(no_order)
          }
        }
      ]
    });
    confirm.present();
  }

  // hapus order by no_order
  hapus(no_order:number) {
    this.list_order = this.list_order.filter(function( obj ) {
      return obj.no_order !== no_order;
    });
    localStorage.setItem('data', JSON.stringify(this.list_order))
    let alert = this.alertCtrl.create({
      subTitle: 'Order berhasil dihapus!',
      buttons: ['OK']
    });
    alert.present();
    this.init()
  }

  createOrderTapped() {
    this.navCtrl.push(Order)
  }

  editOrderTapped(data) {
    this.navCtrl.push(Order, {'order':data})
  }

  orderDetailTapped(data) {
    this.navCtrl.push(OrderDetailPage, {'order':data})
  }

  optionTapped(no_order:number) {
    for (var i=0; i<this.list_order.length; i++) {
      if (this.list_order[i].no_order == no_order) {
        if (this.list_order[i].flag) {
          this.list_order[i].flag = false
        } else {
          this.list_order[i].flag = true
        }
      } else {
        this.list_order[i].flag = false
      }
    }
  }

}
