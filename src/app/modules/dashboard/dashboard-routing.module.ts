import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SmsComponent } from './pages/sms/sms.component';
import { BoComponent } from './pages/bo/bo.component';
import { CoComponent } from './pages/co/co.component';
import { CpComponent } from './pages/cp/cp.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'nfts', pathMatch: 'full' },
      { path: 'nfts', component: SmsComponent },
      { path: 'bo', component: BoComponent },
      { path: 'co', component: CoComponent },
      { path: 'cp', component: CpComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
