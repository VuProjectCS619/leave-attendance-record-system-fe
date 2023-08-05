import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminService} from "../../services/admin.service";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

export interface leave {
  name: string,
  employeeID: string,
  employeeDesignation: string,
  allowedLeave: number
}

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent implements OnInit  {
  //snackbar variables
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  leaves:any
  constructor(public dialog: MatDialog, private service:AdminService, private snackbar:MatSnackBar) {}
  acceptedData = {
    applicationId: "",
    status: "Accepted"
  }
    rejectedData = {
      applicationId: "",
      status: "Rejected"
    }
ngOnInit()
{
  this.getEmployeeLeaves()
}

getEmployeeLeaves(){
  this.service.getEmployeeLeaves().subscribe({
    next:value => {
      this.leaves =value
    },
    error:err => {
      console.log(err)
    }
  })
}
 acceptLeave( applicationId:string)
 {
   this.acceptedData.applicationId = applicationId
   this.service.approveLeave(this.acceptedData).subscribe({
     next: value => {
       this.getEmployeeLeaves()
       this.snackbar.open("Leave Accepted", 'Close', {
         horizontalPosition: this.horizontalPosition,
         verticalPosition: this.verticalPosition,
         duration: this.durationInSeconds * 1000,
       })
     },
     error: err => this.snackbar.open("An error occurred", 'Close', {
       horizontalPosition: this.horizontalPosition,
       verticalPosition: this.verticalPosition,
       duration: this.durationInSeconds * 1000,
     })
   })
 }
 rejectedLeave( applicationId:string)
 {
   this.rejectedData.applicationId = applicationId
   this.service.approveLeave(this.rejectedData).subscribe({
     next: value =>{
       this.getEmployeeLeaves()
       this.snackbar.open("Leave Rejected", 'Close', {
         horizontalPosition: this.horizontalPosition,
         verticalPosition: this.verticalPosition,
         duration: this.durationInSeconds * 1000,
       })
     },
     error: err => this.snackbar.open("An error occurred", 'Close', {
       horizontalPosition: this.horizontalPosition,
       verticalPosition: this.verticalPosition,
       duration: this.durationInSeconds * 1000,
     })
   })
 }
}
