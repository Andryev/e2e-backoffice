import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {Food} from '../../forms/select/select.component';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';






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
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}]
})
export class PricingUpdateComponent {




  prazoList: number[] = [
    18,
    24,
    30,
    36,
    42,
    48,
    54,
    60,
    64,
    70
  ];
  fileInfo = '  Nenhum ficheiro selecionado.';



  valid: any = {};
  options: FormGroup;
  firstFormGroup: FormGroup = Object.create(null);
  secondFormGroup: FormGroup = Object.create(null);


  constructor(formBuilder: FormBuilder,
              // tslint:disable-next-line:variable-name
              @Inject(MAT_DATE_LOCALE) private _locale: string,
              // tslint:disable-next-line:variable-name
              private _adapter: DateAdapter<any>) {
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

  get isChecked(): any {
    return this.options.controls.isChecked.value;
  }

  onFileSelect(input: HTMLInputElement): void {
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
