import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.css']
})
export class PointTableComponent implements OnInit {
  pointTableData :any
  tableHeading:any

  // tableHeading: string[] = ['Product name', 'Color', 'Category', 'Price'];

  // // Example data structure where pointTableData starts from index 1
  // pointTableData: any[] = [
  //   [/* empty to match index 0 */],
  //   ['Apple MacBook Pro 17"', 'Silver', 'Laptop', '$2999'],
  //   // Add more rows as needed
  // ];

  constructor(private _api:ApiService){

  }
  ngOnInit(): void {
    this.pointtable();
  }
  
  private pointtable(){
    this._api.getPointTable().subscribe({
      next:data=>{
        this.pointTableData=data;
        // console.log(this.pointTableData);
        this.tableHeading=[...this.pointTableData[0]]
        // console.log(this.tableHeading);
      },
      error:error=>{
        console.log(error);
        
      }
    })
  }

}
