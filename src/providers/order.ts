import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Order provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OrderService {
  // list Order
  list_order:any;

  // list operator
  list_operator:any;
  list_member:any;
  list_item:any;

  // Order
  no_order:number;
  operator_id:any;
  entry_time:Date;

  // flag digunakan untuk mengecek load awal atau tidak
  flagOrder:boolean = false;

  constructor(public http: Http) {
    console.log('Hello Order Provider');
  }

  getNoOrder() {
    if (localStorage.getItem('data')) {
      var obj = JSON.parse(localStorage.getItem('data')) 
      var xValues = obj.map(function(o) {
        return o.no_order;
      });
      var xMax = Math.max.apply(null, xValues);
      this.no_order = parseInt(JSON.stringify(xMax)) + 1
    } else {
      this.no_order = 1
    }
    return this.no_order;
  }

  setEntryTime(date) {
    this.entry_time = date;
  }

  getListOperator() {
    this.list_operator = [
      {operator_id: 1, nama: "Gavin", photo: "gavin.png", pin: "1111"},
      {operator_id: 2, nama: "Trifa", photo: "trifa.png", pin: "2222"}];

      return this.list_operator;
  }

  getListOrder() {
    this.list_order = [
      {no_order: 1, entry_time: new Date(), member_id: 1, barberman: 1, total: 30000},
      {no_order: 2, entry_time: new Date(), member_id: 1, barberman: 1, total: 40000}   
    ];

    return this.list_order;
  }

  getListMember() {
    this.list_member = [
      {member_id: 1, nama: "edvin"}, {member_id:2, nama:"riki"}, {member_id:3, nama:"dudu"}
    ]

    return this.list_member;
  }

  getListItem() {
    this.list_item = [
      {kd_item:1, nama: "HairCut", price: 30000, qty:0, total:0}, 
      {kd_item:2, nama: "barber", price:40000, qty:0, total:0}, 
      {kd_item:3, nama: "Gentelman", price:40000, qty:0, total:0} 
    ]

    return  this.list_item;
  }

  setOrperator(id) {
    this.operator_id = id;
  }

  getOperator() {
    return this.operator_id;
  }




}
