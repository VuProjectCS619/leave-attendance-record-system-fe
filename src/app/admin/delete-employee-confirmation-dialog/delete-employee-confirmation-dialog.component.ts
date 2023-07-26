import {Component, Inject} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Component({
  selector: 'app-delete-employee-confirmation-dialog',
  templateUrl: './delete-employee-confirmation-dialog.component.html',
  styleUrls: ['./delete-employee-confirmation-dialog.component.css']
})
export class DeleteEmployeeConfirmationDialogComponent {
  //snackbar variables
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;

  constructor(private service:AdminService, @Inject(MAT_DIALOG_DATA) public empData:any, private snackbar:MatSnackBar) {}

  deleteEmp()
  {
    this.service.deleteEmployee(this.empData).subscribe({
      next:value => {
        this.snackbar.open("Deleted Successfully", 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        })

      },
      error:err => this.snackbar.open("An error occurred", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      })
    })
  }
}
