import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  columnDefs: ColDef[] = [
    { field: 'company', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true },
    { field: 'country', sortable: true, filter: true },
    { field: 'currency', sortable: true, filter: true },
    { field: 'action', cellRenderer: () => {
      return `<button class="action-button edit"><mat-icon class="mat-icon material-icons mat-icon-no-color" role="img" aria-hidden="true">
      edit</mat-icon>Edit</button>
      <button class="action-button delete"><mat-icon class="mat-icon material-icons mat-icon-no-color" role="img" aria-hidden="true">
      delete</mat-icon>Delete</button>`; }
    },
    // {
    //   headerName: 'Button Col 2',
    //  // cellRenderer: 'buttonRenderer',
    //   cellRendererParams: {
        
    //     //onClick: this.onBtnClick2.bind(this),
    //     onclick: function(e:any){
    //       debugger;
    //       e.preventDefault();
    //       console.log('somendra')
    //     },
        
    //     label: 'Click 2'
    //   }
    // },
  ];

  rowData = [
    { company: 'Toyota', model: 'Celica', price: 35000, country: 'India', currency: 'Rupee'},
    { company: 'Ford', model: 'Mondeo', price: 32000, country: 'India', currency: 'Rupee'},
    { company: 'Porsche', model: 'Boxter', price: 72000, country: 'India', currency: 'Rupee'},
    { company: 'Toyota', model: 'Celica', price: 35000, country: 'India', currency: 'Rupee'},
    { company: 'Ford', model: 'Mondeo', price: 32000, country: 'India', currency: 'Rupee'},
    { company: 'Porsche', model: 'Boxter', price: 72000, country: 'India', currency: 'Rupee'},
    { company: 'Toyota', model: 'Celica', price: 35000, country: 'India', currency: 'Rupee'},
    { company: 'Ford', model: 'Mondeo', price: 32000, country: 'India', currency: 'Rupee'},
    { company: 'Porsche', model: 'Boxter', price: 72000, country: 'India', currency: 'Rupee'},
    { company: 'Toyota', model: 'Celica', price: 35000, country: 'India', currency: 'Rupee'},
    { company: 'Ford', model: 'Mondeo', price: 32000, country: 'India', currency: 'Rupee'},
    { company: 'Porsche', model: 'Boxter', price: 72000, country: 'India', currency: 'Rupee'},
    { company: 'Toyota', model: 'Celica', price: 35000, country: 'India', currency: 'Rupee'},
    { company: 'Ford', model: 'Mondeo', price: 32000, country: 'India', currency: 'Rupee'},
    { company: 'Porsche', model: 'Boxter', price: 72000, country: 'India', currency: 'Rupee'},
    { company: 'Toyota', model: 'Celica', price: 35000, country: 'India', currency: 'Rupee'},
    { company: 'Ford', model: 'Mondeo', price: 32000, country: 'India', currency: 'Rupee'},
    { company: 'Porsche', model: 'Boxter', price: 72000, country: 'India', currency: 'Rupee'},
    { company: 'Ford', model: 'Mondeo', price: 32000, country: 'India', currency: 'Rupee'},
  ];

  constructor(private router:Router) { }

  goToForms($myParam: string = ''): void {
    const navigationDetails: string[] = ['/forms'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  ngOnInit(): void {
  }
}
