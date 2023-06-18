import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsEngagementComponent } from './sms-engagement.component';

describe('SmsEngagementComponent', () => {
  let component: SmsEngagementComponent;
  let fixture: ComponentFixture<SmsEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsEngagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
