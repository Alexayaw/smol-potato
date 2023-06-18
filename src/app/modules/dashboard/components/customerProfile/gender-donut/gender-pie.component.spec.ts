import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderPieComponent } from './gender-pie.component';

describe('GenderDonutComponent', () => {
  let component: GenderPieComponent;
  let fixture: ComponentFixture<GenderPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderPieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
