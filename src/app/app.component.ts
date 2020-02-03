import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HistoryTransaksi } from '../pages/history-transaksi/history-transaksi';
import { OrderListPage } from '../pages/order-list/order-list';
import { SettingPage } from '../pages/setting/setting';
import { RekapKasPage } from '../pages/rekap-kas/rekap-kas';
import { OperatorPage } from '../pages/operator/operator';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = OperatorPage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Update', icon: 'sync', component: OrderListPage },
      { title: 'Order', icon: 'list-box', component: OrderListPage },
      { title: 'Riwayat Transaksi', icon: 'stats', component: HistoryTransaksi },
      { title: 'Pengaturan', icon: 'settings', component: SettingPage },
      { title: 'Ganti Operator', icon: 'switch', component: OperatorPage },
      { title: 'Rekap Kas', icon: 'cash', component: RekapKasPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
