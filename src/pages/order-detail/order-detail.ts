import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { PembayaranPage } from '../pembayaran/pembayaran';
import { OrderListPage } from '../order-list/order-list';
import { OrderService } from '../../providers/order';
/*
  Generated class for the OrderDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html'
})
export class OrderDetailPage {
  list_order:any;
  Order:Array<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public service: OrderService, 
              public alertCtrl: AlertController) {

    this.Order = [];
    this.Order[0].push(navParams.get("order"));
    // kembalikan ke flase supaya option di order-list tertutup
    this.Order[0].flag = false;

    console.log(this.Order)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
  }

  pembayaranTapped() {
    this.navCtrl.push(PembayaranPage, {'order': this.Order});
  }


  simpan() {
    let data:Array<any> = [];
    this.Order[0].status = "PENDING";
    let flag:boolean= false;

    if (localStorage.getItem('data')) {
      data = JSON.parse(localStorage.getItem('data'))

      for (var i=0; i<data.length; i++) {
        if (data[i].no_order == this.Order[0].no_order) {
          data[i] = this.Order[0];
          flag = true
        }
      }

      if (!flag) {
        data.push(this.Order[0])
      }
  
      localStorage.setItem('data', JSON.stringify(data))
    } else {
      localStorage.setItem('data', JSON.stringify(this.Order))
    }

    // pesan simpan
    let alert = this.alertCtrl.create({
        subTitle: 'Order berhasil disimpan!',
        buttons: [{
          text: 'OK',
          handler: data => {
            this.navCtrl.setRoot(OrderListPage)
          }
        }]
      });
      alert.present();
      
    }

    



}
