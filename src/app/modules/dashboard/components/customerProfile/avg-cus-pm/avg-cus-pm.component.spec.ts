import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgCusPmComponent } from './avg-cus-pm.component';

describe('AvgCusPmComponent', () => {
  let component: AvgCusPmComponent;
  let fixture: ComponentFixture<AvgCusPmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgCusPmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgCusPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
