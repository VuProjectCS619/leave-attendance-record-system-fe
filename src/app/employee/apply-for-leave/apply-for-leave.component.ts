import {Component, OnInit} from '@angular/core';
import {IApplyForLeave} from "../../interfaces/dtos";
import {EmployeeService} from "../../services/employee.service";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
@Component({
  selector: 'app-apply-for-leave',
  templateUrl: './apply-for-leave.component.html',
  styleUrls: ['./apply-for-leave.component.css']
})
export class ApplyForLeaveComponent {
constructor(private service:EmployeeService, private snackbar:MatSnackBar) {}
//snackbar variables
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  leaveStats:any

  applyLeaveForm:IApplyForLeave =
  {
    leaveType: "",
    descriptionLeave: "",
    fromDate: "",
    reason: "",
    toDate: ""
  }

  user = JSON.parse(localStorage.getItem("user") || "")
  allowedCasualLeaves:number  = this.user ? this.user.allowedCasualLeaves : 0
  allowedCompensatoryLeaves:number  = this.user ? this.user.allowedCompensatoryLeaves : 0
  allowedEarnedLeaves:number  = this.user ? this.user.allowedEarnedLeaves : 0
  consumedCasualLeaves:number  = this.user ? this.user.consumedCasualLeaves : 0
  consumedCompensatoryLeaves:number  = this.user ? this.user.consumedCompensatoryLeaves : 0
  consumedEarnedLeaves:number  = this.user ? this.user.consumedEarnedLeaves : 0
  balanceCasualLeaves:number = this.user.allowedCasualLeaves - this.user.consumedCasualLeaves
  balanceCompensatoryLeaves:number = this.user.allowedCompensatoryLeaves - this.user.consumedCompensatoryLeaves
  balanceEarnedLeaves:number = this.user.allowedEarnedLeaves - this.user.consumedEarnedLeaves
  getLeaveStatus(){
    this.service.getEmployeeLeaveStatus().subscribe({
      next:value => {
        console.log(value)
        this.leaveStats = value
      },
      error:err => {
        console.log(err)
      }
    })
  }
  applyLeave()
  {
    this.service.applyForLeave(this.applyLeaveForm).subscribe({

      next:value => {
        this.snackbar.open("Successfully Applied", 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        })
      },
      error:err => {
        this.snackbar.open("Please fill the form", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      })
      }
    })
  }
  data = [
    {description: "Casual Leave", allowed: this.allowedCasualLeaves, consumed: this.consumedCasualLeaves, totalBalance: this.balanceCasualLeaves},
    {description: "Compensatory Leave", allowed: this.allowedCompensatoryLeaves, consumed: this.consumedCompensatoryLeaves, totalBalance: this.balanceCompensatoryLeaves},
    {description: "Earned Leave", allowed: this.allowedEarnedLeaves, consumed: this.consumedEarnedLeaves, totalBalance: this.balanceEarnedLeaves},
  ];
  displayedColumns: string[] = ['Description Type', 'Allowed Leaves', 'Consumed Leaves', 'Balance'];
  dataSource = this.data;
}
