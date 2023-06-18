import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpHeaderComponent } from './cp-header.component';

describe('CpHeaderComponent', () => {
  let component: CpHeaderComponent;
  let fixture: ComponentFixture<CpHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
