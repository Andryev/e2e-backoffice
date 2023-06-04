import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingGeneralComponent } from './pricing-general.component';

describe('PricingGeneralComponent', () => {
  let component: PricingGeneralComponent;
  let fixture: ComponentFixture<PricingGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
