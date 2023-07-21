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
  constructor(private service:EmployeeService, private snackbar:MatSnackBar) {
  }
myName:string="Muhammad Osama Iftikhar"
  myEmail:string="osama@abc.com"
  mySalary:number=100000
  myDesignation:string="Angular Developer"
  myContact:string="+923136784434"

  updateProfileSettingForm:IUpdateProfileSetting =
    {
      name: "",
      password: "",
      contact:""
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
