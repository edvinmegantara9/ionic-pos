import { Component } from '@angular/core';
import { MemberPage } from '../member/member';
import { OrderDetailPage } from '../order-detail/order-detail';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

import { OrderService } from '../../providers/order';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class Order {
  order: Array<any> = [];
  total:number = 0;
  nama_member:string = "PILIH MEMBER";
  list_item:Array<any> = [];

  // filter 
  term:string="";

  constructor(public navCtrl: NavController, 
              public orderService: OrderService, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) {

    if (navParams.get("order")) {
      this.order[0].push(navParams.get("order"))
      // kembalikan ke flase supaya option di order-list tertutup
      this.order[0].flag = false;
      // set nama member 
      this.nama_member = this.order[0].member_name;
      this.list_item = this.orderService.getListItem();

      for (var i=0; i<this.list_item.length; i++) {
        for (var ii=0; ii<this.order[0].order_detail.length; ii++) {
          if (this.list_item[i].kd_item == this.order[0].order_detail[ii].kd_item) {
            this.list_item[i].qty = this.order[0].order_detail[ii].qty;
            this.list_item[i].total = this.order[0].order_detail[ii].total;
            this.list_item[i].price =this.order[0].order_detail[ii].price;
          }
        }
      }
      
      this.countTotal()
    } else {
      this.order.push({
        no_order: this.orderService.getNoOrder(), 
        entry_time: Date(), 
        operator: this.orderService.getOperator(), 
        order_detail:[]})
      this.list_item = this.orderService.getListItem();
    }

  }

  memberTapped() {
    let modal = this.modalCtrl.create(MemberPage);
    modal.onDidDismiss(data=> {
      if(data) {
        this.order[0].member_id = data.member_id
        this.order[0].member_name = data.nama
        this.nama_member = data.nama;
      }
    })
    modal.present();
  }

  addItem(kd_item:number) {
      for (var i=0; i<this.list_item.length; i++) {
        if (this.list_item[i].kd_item == kd_item) {
          this.list_item[i].qty += 1;
          this.list_item[i].total = this.list_item[i].qty * this.list_item[i].price 
        }  
      }
      this.countTotal()
  }

  removeItem(kd_item:number) {
     for (var i=0; i<this.list_item.length; i++) {
        if (this.list_item[i].kd_item == kd_item) {
          this.list_item[i].qty -= 1;   
          this.list_item[i].total = this.list_item[i].qty * this.list_item[i].price    
        }  
      }
      this.countTotal()
  }

  countTotal() {
    this.total = 0;
    for (var i=0; i<this.list_item.length; i++) {
      this.total += this.list_item[i].total;
    }
  }

  orderDetailTapped() {
      this.order[0].order_detail = [];
      for (var i=0; i<this.list_item.length; i++) {
        if (this.list_item[i].qty > 0) {
          this.order[0].order_detail.push({
            kd_item: this.list_item[i].kd_item, 
            nama: this.list_item[i].nama, 
            qty: this.list_item[i].qty,
            price: this.list_item[i].price,
            total: this.list_item[i].total
          })
        }  
      }
      this.order[0].grandtotal = this.total;

      // validasi
      if (!this.order[0].member_id) {
        let alert = this.alertCtrl.create({
            subTitle: 'Member belom diisi!',
            buttons: ['OK']
          });
          alert.present();
      }  else {
         if (this.order[0].order_detail == 0) { 
          let alert = this.alertCtrl.create({
              subTitle: 'Item belum dipilih!',
              buttons: ['OK']
            });
            alert.present();         
         } else {
            this.navCtrl.push(OrderDetailPage, {order: this.order});
         }
      }
  }

}
