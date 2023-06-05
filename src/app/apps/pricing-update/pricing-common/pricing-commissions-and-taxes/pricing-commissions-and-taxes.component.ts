import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pricing-commissions-and-taxes',
  templateUrl: './pricing-commissions-and-taxes.component.html',
  styleUrls: ['./pricing-commissions-and-taxes.component.scss']
})
export class PricingCommissionsAndTaxesComponent implements OnInit {

  @Input()
  formPricingCommissions: FormGroup | undefined;

  @Output() onBlurEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { 
    this.formPricingCommissions =this.formBuilder.group({
      cpp: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onBlur(){
    console.log('PricingCommmissionAndTaxesComponents => ' + this.formPricingCommissions?.controls['name'].value)
    this.onBlurEvent.emit(this.formPricingCommissions?.controls['name'].value);
  }

}
