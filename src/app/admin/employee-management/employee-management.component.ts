import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddLeaveDialogComponent} from "../add-leave-dialog/add-leave-dialog.component";
import {UpdateEmployeeDialogComponent} from "../update-employee-dialog/update-employee-dialog.component";

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(UpdateEmployeeDialogComponent);
  }
 employeesManagement = [
   {
     name: "Muhammad Osama Iftikhar",
     employeeEmail: "osama@abc.com",
     salary: 90000,
     designation: "Angular Developer",
     contact: "+923136784434"
   },
   {
     name: "Muhammad Osama Iftikhar",
     employeeEmail: "osama@abc.com",
     salary: 90000,
     designation: "Angular Developer",
     contact: "+923136784434"
   },
   {
     name: "Muhammad Osama Iftikhar",
     employeeEmail: "osama@abc.com",
     salary: 90000,
     designation: "Angular Developer",
     contact: "+923136784434"
   },
   {
     name: "Muhammad Osama Iftikhar",
     employeeEmail: "osama@abc.com",
     salary: 90000,
     designation: "Angular Developer",
     contact: "+923136784434"
   },
   {
     name: "Muhammad Osama Iftikhar",
     employeeEmail: "osama@abc.com",
     salary: 90000,
     designation: "Angular Developer",
     contact: "+923136784434"
   },
   {
     name: "Muhammad Osama Iftikhar",
     employeeEmail: "osama@abc.com",
     salary: 90000,
     designation: "Angular Developer",
     contact: "+923136784434"
   },
 ]
}
