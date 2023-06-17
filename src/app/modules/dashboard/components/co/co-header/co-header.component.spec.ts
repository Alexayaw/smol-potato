import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoHeaderComponent } from './co-header.component';

describe('CoHeaderComponent', () => {
  let component: CoHeaderComponent;
  let fixture: ComponentFixture<CoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
