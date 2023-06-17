import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeBarChartComponent } from './age-bar-chart.component';

describe('AgeBarChartComponent', () => {
  let component: AgeBarChartComponent;
  let fixture: ComponentFixture<AgeBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
