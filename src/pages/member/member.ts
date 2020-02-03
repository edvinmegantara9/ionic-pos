import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { OrderService } from '../../providers/order';
import { Keyboard } from 'ionic-native';

/*
  Generated class for the Member page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-member',
  templateUrl: 'member.html'
})
export class MemberPage {
 @ViewChild('focusInput') myInput ;


  list_member:Array<any>= [];
  // filter 
  term:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              public service: OrderService) {
    this.list_member = this.service.getListMember();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberPage');
      setTimeout(() => {
        Keyboard.show() // for android
        this.myInput.setFocus();
      },150); //a least 150ms.
  }

  addMember(data) {
    console.log(data)
    this.viewCtrl.dismiss(data);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
 
}
