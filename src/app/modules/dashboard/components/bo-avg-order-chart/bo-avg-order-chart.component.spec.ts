import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoAvgOrderChartComponent } from './bo-avg-order-chart.component';

describe('BoAvgOrderChartComponent', () => {
  let component: BoAvgOrderChartComponent;
  let fixture: ComponentFixture<BoAvgOrderChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoAvgOrderChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoAvgOrderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
