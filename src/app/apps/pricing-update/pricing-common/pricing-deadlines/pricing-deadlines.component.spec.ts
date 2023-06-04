import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingDeadlinesComponent } from './pricing-deadlines.component';

describe('PricingDeadlinesComponent', () => {
  let component: PricingDeadlinesComponent;
  let fixture: ComponentFixture<PricingDeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingDeadlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingDeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
