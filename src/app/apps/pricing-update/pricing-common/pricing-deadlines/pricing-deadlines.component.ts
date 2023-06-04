import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface DeadLineElement {
  coeficiente: string;
  prazo: number;
  position: number;
  tan: number;
  codigo: string;
  selo: number;
};

const ELEMENT_DATA: DeadLineElement[] = [
  {position: 1, prazo: 18, coeficiente: '0,004521458654', tan: 1.0079, codigo: 'CCME0123', selo: 0.0176},
  {position: 2, prazo: 24, coeficiente: '0,004521458654', tan: 4.0026, codigo: 'CCME0123', selo: 0.0176},
  {position: 3, prazo: 30, coeficiente: '0,004521458654', tan: 6.941, codigo: 'CCME0123', selo: 0.0176},
  {position: 4, prazo: 36, coeficiente: '0,004521458654', tan: 9.0122, codigo: 'CCME0123', selo: 0.0176},
  {position: 5, prazo: 42, coeficiente: '0,004521458654', tan: 10.811, codigo: 'CCME0123', selo: 0.0176},
  {position: 6, prazo: 48, coeficiente: '0,004521458654', tan: 12.0107, codigo: 'CCME0123', selo: 0.0176},
  {position: 7, prazo: 54, coeficiente: '0,004521458654', tan: 14.0067, codigo: 'CCME0123', selo: 0.0176},
  {position: 8, prazo: 60, coeficiente: '0,004521458654', tan: 15.9994, codigo: 'CCME0123', selo: 0.0176},
  {position: 9, prazo: 64, coeficiente: '0,004521458654', tan: 18.9984, codigo: 'CCME0123', selo: 0.0176},
  {position: 10, prazo: 70, coeficiente: '0,004521458654', tan: 20.1797, codigo: 'CCME0123', selo: 0.0176},
];


@Component({
  selector: 'app-pricing-deadlines',
  templateUrl: './pricing-deadlines.component.html',
  styleUrls: ['./pricing-deadlines.component.scss']
})
export class PricingDeadlinesComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'selo', 'edit'];
  dataSource = new MatTableDataSource<DeadLineElement>(ELEMENT_DATA);
  selection = new SelectionModel<DeadLineElement>(true, []);
  constructor() { }

  ngOnInit(): void {
  }

  public isAllSelected(): any {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public toggleAllRows(): any {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: DeadLineElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
