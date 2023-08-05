import {Component, Inject} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {IUpdateEmployee} from "../../interfaces/dtos";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
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
  constructor(private service:AdminService,private dialogRef:MatDialogRef<any>,@Inject(MAT_DIALOG_DATA) public data: any, private snackbar:MatSnackBar) { }

  updateEmployeeForm:IUpdateEmployee =
    {
      salary: this.data.salary,
      contact: this.data.contact,
      designation: this.data.designation,
      name: this.data.name,
      password: this.data.password,
      allowedCasualLeaves: this.data.allowedCasualLeaves,
      allowedCompensatoryLeaves: this.data.allowedCompensatoryLeaves,
      allowedEarnedLeaves: this.data.allowedEarnedLeaves
    }

  updateEmployee()
  {
    this.service.updateEmployee(this.updateEmployeeForm, this.data.id).subscribe({
      next:value => {
        this.dialogRef.close(true)
        this.snackbar.open("Updated Successfully", 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        })
      },
      error:err => this.snackbar.open("Please fill the form", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      })
    })
  }
}
