import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusAqCostChartComponent } from './cus-aq-cost-chart.component';

describe('CusAqCostChartComponent', () => {
  let component: CusAqCostChartComponent;
  let fixture: ComponentFixture<CusAqCostChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusAqCostChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusAqCostChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
