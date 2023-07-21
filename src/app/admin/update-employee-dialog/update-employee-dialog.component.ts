import {Component, Inject} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {IUpdateEmployee} from "../../interfaces/dtos";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-employee-dialog',
  templateUrl: './update-employee-dialog.component.html',
  styleUrls: ['./update-employee-dialog.component.css']
})
export class UpdateEmployeeDialogComponent {
  //snackbar variables
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  constructor(private service:AdminService, @Inject(MAT_DIALOG_DATA) public empData: string, private snackbar:MatSnackBar) { }

  updateEmployeeForm:IUpdateEmployee =
    {
      salary: 0,
      contact: "",
      designation: "",
      name: "",
      password: "",
      allowedCasualLeaves: 0,
      allowedCompensatoryLeaves: 0,
      allowedEarnedLeaves: 0
    }
  getEmployeeList(){
    this.service.getEmployee().subscribe({
      next:value =>
      {
        console.log(value)
      },
      error:err => console.log(err),
    })
  }
  updateEmployee()
  {
    this.service.updateEmployee(this.updateEmployeeForm, this.empData).subscribe({
      next:value => this.snackbar.open("Updated Successfully", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      }),
      error:err => this.snackbar.open("An error occurred", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      })
    })
  }
}
