import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderDonutComponent } from './gender-donut.component';

describe('GenderDonutComponent', () => {
  let component: GenderDonutComponent;
  let fixture: ComponentFixture<GenderDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderDonutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
