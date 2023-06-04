import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingParameterizationComponent } from './pricing-parameterization.component';

describe('PricingParameterizationComponent', () => {
  let component: PricingParameterizationComponent;
  let fixture: ComponentFixture<PricingParameterizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingParameterizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingParameterizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
