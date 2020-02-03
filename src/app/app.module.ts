import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Order } from '../pages/order/order';
import { HistoryTransaksi } from '../pages/history-transaksi/history-transaksi';

import { MemberPage } from '../pages/member/member';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { PembayaranPage } from '../pages/pembayaran/pembayaran';
import { FinishOrderPage } from '../pages/finish-order/finish-order';
import { OrderListPage } from '../pages/order-list/order-list';
import { SettingPage } from '../pages/setting/setting';
import { RekapKasPage } from '../pages/rekap-kas/rekap-kas';
import { OperatorPage } from '../pages/operator/operator';
import { CheckinPage } from '../pages/checkin/checkin';

// service
import { OrderService } from '../providers/order';

import { OrderPipe } from '../pipes/order-pipe';


@NgModule({
  declarations: [
    MyApp,
    Order,
    HistoryTransaksi,
    MemberPage,
    OrderDetailPage,
    PembayaranPage,
    FinishOrderPage,
    OrderListPage,
    SettingPage,
    RekapKasPage,
    OperatorPage,
    CheckinPage,
    OrderPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Order,
    HistoryTransaksi,
    MemberPage,
    OrderDetailPage,
    PembayaranPage,
    FinishOrderPage,
    OrderListPage,
    SettingPage,
    RekapKasPage,
    OperatorPage,
    CheckinPage
  ],
  providers: [OrderService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
