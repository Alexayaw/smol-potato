import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerGrowthChartComponent } from './follower-growth-chart.component';

describe('FollowerGrowthChartComponent', () => {
  let component: FollowerGrowthChartComponent;
  let fixture: ComponentFixture<FollowerGrowthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerGrowthChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowerGrowthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
