import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-pricing-update',
  templateUrl: './pricing-update.component.html',
  styleUrls: ['./pricing-update.component.scss'],
})
export class PricingUpdateComponent implements OnInit {

  fileInfo = '  Nenhum ficheiro selecionado.';
  valid: any = {};
  options: FormGroup;
  step1: FormGroup = Object.create(null);
  step2: FormGroup = Object.create(null);
  step3: FormGroup = Object.create(null);

  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DATE_LOCALE) private _locale: string,
              private _adapter: DateAdapter<any>) {
    this.options = formBuilder.group({
      hideRequired: false,
      isChecked: false,
      floatLabel: 'auto',
    });
    this._locale = 'pt-br';
    this._adapter.setLocale(this._locale);
  }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.step1 = this.formBuilder.group({
      general: this.formBuilder.group({
        id: ['123', Validators.required],
        name: ['', Validators.required],
      }),
      parameterization: this.formBuilder.group({
        name: ['', Validators.required]
      }),
      others: this.formBuilder.group({
        name: ['', Validators.required]
      }),
      commissions: this.formBuilder.group({
        cpp: ['1576', Validators.required]
      }),
      deadlines: this.formBuilder.group({
        name: ['', Validators.required]
      })
    });
    this.step2 = this.formBuilder.group({
      general: this.formBuilder.group({
        name: ['', Validators.required]
      }),
      parameterization: this.formBuilder.group({
        name: ['', Validators.required]
      }),
      others: this.formBuilder.group({
        name: ['', Validators.required]
      }),
      commissions: this.formBuilder.group({
        cpp: ['1876', Validators.required]
      }),
      deadlines: this.formBuilder.group({
        name: ['', Validators.required]
      })
    });
    this.step3 = this.formBuilder.group({
      general: this.formBuilder.group({
        id: ['123', Validators.required],
        name: ['', Validators.required],
      }),
      parameterization: this.formBuilder.group({
        name: ['', Validators.required]
      }),
      others: this.formBuilder.group({
        name: ['', Validators.required]
      }),
      commissions: this.formBuilder.group({
        cpp: ['6578', Validators.required]
      }),
      deadlines: this.formBuilder.group({
        name: ['', Validators.required]
      })
    });
  }

  get isChecked(): any {
    return this.options.controls.isChecked.value;
  }

  onBlur(){
    console.log(this.step1.controls['commissions'].value);
  }
  public onFileSelect(input: HTMLInputElement): void {
    function formatBytes(bytes: number): string {
      const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const factor = 1024;
      let index = 0;

      while (bytes >= factor) {
        bytes /= factor;
        index++;
      }

      return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
    }

    // @ts-ignore
    const file = input.files[0];
    this.fileInfo = `${file.name} (${formatBytes(file.size)})`;
  }
}
