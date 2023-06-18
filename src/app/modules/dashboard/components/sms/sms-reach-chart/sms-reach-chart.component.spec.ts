import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsReachChartComponent } from './sms-reach-chart.component';

describe('SmsReachChartComponent', () => {
  let component: SmsReachChartComponent;
  let fixture: ComponentFixture<SmsReachChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsReachChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsReachChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
