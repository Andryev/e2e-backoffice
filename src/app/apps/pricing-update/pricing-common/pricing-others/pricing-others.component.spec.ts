import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingOthersComponent } from './pricing-others.component';

describe('PricingOthersComponent', () => {
  let component: PricingOthersComponent;
  let fixture: ComponentFixture<PricingOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
