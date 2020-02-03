import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FinishOrderPage } from '../finish-order/finish-order';
import { Keyboard } from 'ionic-native';

/*
  Generated class for the Pembayaran page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pembayaran',
  templateUrl: 'pembayaran.html'
})
export class PembayaranPage {
  @ViewChild('focusInput') myInput ;

  jns_pembayaran: String;
  Order:Array<any>;
  total_bayar:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.Order = [];
    this.Order = navParams.get("order");

    this.jns_pembayaran = "TUNAI"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PembayaranPage');
      setTimeout(() => {
        Keyboard.show() // for android
        this.myInput.setFocus();
      },150); //a least 150ms.
  }

  finishOrderTapped() {
    if (!this.total_bayar) {
      this.total_bayar = 0
    }
    if (this.total_bayar < this.Order[0].grandtotal) {
    let alert = this.alertCtrl.create({
        subTitle: 'Pembayaran tidak cukup!',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.Order[0].status = "LUNAS"
      this.Order[0].jns_pembayaran = this.jns_pembayaran;
      this.Order[0].total_bayar = this.total_bayar;

      let data:Array<any> = [];
      let flag:boolean=false;
      if (localStorage.getItem('data')) {    
        data = JSON.parse(localStorage.getItem('data'))

        for (var i=0; i<data.length; i++) {
          if (data[i].no_order == this.Order[0].no_order) {
            data[i] = this.Order;
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
      this.navCtrl.push(FinishOrderPage, {'order': this.Order})
    }

  }
}
