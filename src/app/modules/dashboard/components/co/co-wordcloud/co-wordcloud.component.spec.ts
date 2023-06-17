import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoWordcloudComponent } from './co-wordcloud.component';

describe('CoWordcloudComponent', () => {
  let component: CoWordcloudComponent;
  let fixture: ComponentFixture<CoWordcloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoWordcloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoWordcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
