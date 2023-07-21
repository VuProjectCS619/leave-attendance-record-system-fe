import {Component} from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from "@angular/material/snack-bar";

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],

})

export class AttendanceComponent {
  //snackbar variables
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;

  constructor(private service:EmployeeService, private snackbar:MatSnackBar) {
  }

  logTimeIn()
  {
    this.service.logTimeIn().subscribe({
      next:value => this.snackbar.open("Punched", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      }),
      error:err =>this.snackbar.open("Already Punched", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      })
    })
  }
  logTimeOut()
  {
    this.service.logTimeOut().subscribe({
      next:value => this.snackbar.open("Punched", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      }),
      error:err =>this.snackbar.open("Already Punched", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      })
    })
  }
}
