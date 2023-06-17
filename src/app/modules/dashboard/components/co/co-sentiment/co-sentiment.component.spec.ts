import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSentimentComponent } from './co-sentiment.component';

describe('CoSentimentComponent', () => {
  let component: CoSentimentComponent;
  let fixture: ComponentFixture<CoSentimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSentimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
