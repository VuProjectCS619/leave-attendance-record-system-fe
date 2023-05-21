import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
];


@Component({
  selector: 'app-apply-for-leave',
  templateUrl: './apply-for-leave.component.html',
  styleUrls: ['./apply-for-leave.component.css']
})
export class ApplyForLeaveComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;

  // toDate = new FormControl(new Date());
  // fromDate = new FormControl(new Date());
  userName:string = "Muhamamd Osama Iftikhar"
  email:string = "osama@abc.com"
  allowedLeaves: number = 5
  consumedLeaves:number = 5
  balance:number = 0
  appliedForLeave:string = "Jan, 05, 2023"
  status:string = "Pending"


  leaveStatus = [
    {
      userName : "Muhamamd Osama Iftikhar",
      email: "osama@abc.com",
      appliedForLeave:"Jan, 05, 2023",
      status:"Pending"
    },
    {
      userName : "Muhamamd Osama Iftikhar",
      email: "osama@abc.com",
      appliedForLeave:"Jan, 15, 2023",
      status:"Pending"
    },
    {
      userName : "Muhamamd Osama Iftikhar",
      email: "osama@abc.com",
      appliedForLeave:"Jan, 25, 2023",
      status:"Pending"
    }
  ]


}
