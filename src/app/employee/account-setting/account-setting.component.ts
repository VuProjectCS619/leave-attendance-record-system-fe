import { Component } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {IUpdateProfileSetting} from "../../interfaces/dtos";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";


@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent {
  //snackbar variables
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  constructor(private service:EmployeeService, private snackbar:MatSnackBar) {}

  user = JSON.parse(localStorage.getItem("user") || "")
  userName :string = this.user? this.user.name: ""
  userPassword :string = this.user? this.user.password: ""
  userContact :string = this.user? this.user.contact: ""

  updateProfileSettingForm:IUpdateProfileSetting =
    {
      name: this.userName,
      password: this.userPassword,
      contact:this.userContact
    }
  updateSetting()
  {
    this.service.updateProfileSetting(this.updateProfileSettingForm).subscribe({
      next:value => this.snackbar.open("Information Updated", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      }),
      error:err => this.snackbar.open("Please fill the form", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      })
    })
  }

}
