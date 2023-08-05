import { Component } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {IAddEmployee} from "../../interfaces/dtos";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  //snackbar variables
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
 constructor(private service:AdminService, private snackbar:MatSnackBar) { }

  addEmployeeForm:IAddEmployee =
    {
      contact: "",
      designation: "",
      email: "",
      name: "",
      password: "",
      salary: 0,
      allowedCasualLeaves: 0,
      allowedCompensatoryLeaves: 0,
      allowedEarnedLeaves: 0,
    }

    addEmployee()
    {
     this.service.addEmployee(this.addEmployeeForm).subscribe({
       next:value =>{
         this.snackbar.open("Added Successfully", 'Close', {
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
