import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { NftChartCardComponent } from './components/nft/nft-chart-card/nft-chart-card.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BoComponent } from './pages/bo/bo.component';
import { CpComponent } from './pages/cp/cp.component';
import { CoComponent } from './pages/co/co.component';
import { SmsComponent } from './pages/sms/sms.component';
import { CoHeaderComponent } from './components/co/co-header/co-header.component';
import { CoSentimentComponent } from './components/co/co-sentiment/co-sentiment.component';
import { CoWordcloudComponent } from './components/co/co-wordcloud/co-wordcloud.component';
import { AgeBarChartComponent } from './components/customerProfile/age-bar-chart/age-bar-chart.component';
import { AvgCusPmComponent } from './components/customerProfile/avg-cus-pm/avg-cus-pm.component';
import { SmsReachChartComponent } from './components/sms/sms-reach-chart/sms-reach-chart.component';
import { SmsEngagementComponent } from './components/sms/sms-engagement/sms-engagement.component';
import { FollowerGrowthChartComponent } from './components/sms/follower-growth-chart/follower-growth-chart.component';
import { ConversionRateChartComponent } from './components/sms/conversion-rate-chart/conversion-rate-chart.component';
import { CusAqCostChartComponent } from './components/sms/cus-aq-cost-chart/cus-aq-cost-chart.component';
import { CusLifetimeValChartComponent } from './components/sms/cus-lifetime-val-chart/cus-lifetime-val-chart.component';
import { GenderPieComponent } from './components/customerProfile/gender-donut/gender-pie.component';
import { TopCustomerComponent } from './components/customerProfile/top-customer/top-customer.component';
import { BoAvgOrderChartComponent } from './components/bo-avg-order-chart/bo-avg-order-chart.component';
import { BoHeaderComponent } from './components/bo-header/bo-header.component';
import { CpHeaderComponent } from './components/cp-header/cp-header.component';
@NgModule({
  declarations: [
    DashboardComponent,
    SmsComponent,
    NftChartCardComponent,
    BoComponent,
    CpComponent,
    CoComponent,
    CoHeaderComponent,
    CoWordcloudComponent,
    CoSentimentComponent,
    AgeBarChartComponent,
    AvgCusPmComponent,
    GenderPieComponent,
    TopCustomerComponent,
    BoAvgOrderChartComponent,
    BoHeaderComponent,
    SmsReachChartComponent,
    SmsEngagementComponent,
    FollowerGrowthChartComponent,
    ConversionRateChartComponent,
    CusAqCostChartComponent,
    CusLifetimeValChartComponent,
    CpHeaderComponent,
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