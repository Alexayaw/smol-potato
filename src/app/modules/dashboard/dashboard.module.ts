import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { NftSingleCardComponent } from './components/nft/nft-single-card/nft-single-card.component';
import { NftDualCardComponent } from './components/nft/nft-dual-card/nft-dual-card.component';
import { NftChartCardComponent } from './components/nft/nft-chart-card/nft-chart-card.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NftHeaderComponent } from './components/nft/nft-header/nft-header.component';
import { NftAuctionsTableComponent } from './components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftAuctionsTableItemComponent } from './components/nft/nft-auctions-table-item/nft-auctions-table-item.component';
import { BoComponent } from './pages/bo/bo.component';
import { CpComponent } from './pages/cp/cp.component';
import { CoComponent } from './pages/co/co.component';
import { SmsComponent } from './pages/sms/sms.component';
import { CoHeaderComponent } from './components/co/co-header/co-header.component';
import { CoSentimentComponent } from './components/co/co-sentiment/co-sentiment.component';
import { CoWordcloudComponent } from './components/co/co-wordcloud/co-wordcloud.component';
import { AgeBarChartComponent } from './components/customerProfile/age-bar-chart/age-bar-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SmsComponent,
    NftSingleCardComponent,
    NftDualCardComponent,
    NftChartCardComponent,
    NftHeaderComponent,
    NftAuctionsTableComponent,
    NftAuctionsTableItemComponent,
    BoComponent,
    CpComponent,
    CoComponent,
    CoHeaderComponent,
    CoWordcloudComponent,
    CoSentimentComponent,
    AgeBarChartComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    NgApexchartsModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class DashboardModule {}
