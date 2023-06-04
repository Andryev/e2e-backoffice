import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-general',
  templateUrl: './pricing-general.component.html',
  styleUrls: ['./pricing-general.component.scss']
})
export class PricingGeneralComponent implements OnInit {

  products: any[] = [
    {value: 'steak-0', viewValue: 'Crédito 1'},
    {value: 'pizza-1', viewValue: 'Crédito 2'},
    {value: 'tacos-2', viewValue: 'Crédito 3'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
