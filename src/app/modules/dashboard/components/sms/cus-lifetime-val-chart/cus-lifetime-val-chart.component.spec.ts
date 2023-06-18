import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusLifetimeValChartComponent } from './cus-lifetime-val-chart.component';

describe('CusLifetimeValChartComponent', () => {
  let component: CusLifetimeValChartComponent;
  let fixture: ComponentFixture<CusLifetimeValChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusLifetimeValChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusLifetimeValChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
