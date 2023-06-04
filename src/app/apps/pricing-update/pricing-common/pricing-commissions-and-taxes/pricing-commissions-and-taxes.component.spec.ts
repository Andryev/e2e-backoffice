import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCommissionsAndTaxesComponent } from './pricing-commissions-and-taxes.component';

describe('PricingCommissionsAndTaxesComponent', () => {
  let component: PricingCommissionsAndTaxesComponent;
  let fixture: ComponentFixture<PricingCommissionsAndTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingCommissionsAndTaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCommissionsAndTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
