import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-pricing-update',
  templateUrl: './pricing-update.component.html',
  styleUrls: ['./pricing-update.component.scss'],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt-pt'},
  {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
  },
  {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},]
})
export class PricingUpdateComponent {
  
  options: FormGroup;
  firstFormGroup: FormGroup = Object.create(null);
  secondFormGroup: FormGroup = Object.create(null);
  

  constructor(formBuilder: FormBuilder,
    @Inject(MAT_DATE_LOCALE) private _locale: string,

    private _adapter: DateAdapter<any>,) {
    this.options = formBuilder.group({
      hideRequired: false,
      isChecked: false,
      floatLabel: 'auto',
    });
    this.firstFormGroup = formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this._locale = 'pt-br';
    this._adapter.setLocale(this._locale);
  }

  get isChecked(){
    return this.options.controls['isChecked'].value;
  }
  // For form validator
  email = new FormControl('', [Validators.required, Validators.email]);

  // Sufix and prefix
  hide = true;

  getErrorMessage(): any {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }
}
