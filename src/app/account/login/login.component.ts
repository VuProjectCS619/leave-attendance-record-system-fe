import { Component } from '@angular/core';
import { Router} from "@angular/router";
import {ILogin} from "../../interfaces/dtos";
import {AccountLoginService} from "../../services/account.service";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //snackbar variables
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  leaves:any
  constructor(private service:AccountLoginService  , private route : Router, private snackbar:MatSnackBar) {}

  hide= true
  loginForm:ILogin =
  {
    email: "",
    password: "",
  }

  // check if email == admin go to admin dashboard else employee
  loggedIn(){
    if(this.loginForm.email === "admin@gmail.com" && this.loginForm.password === "password" )
    {
      this.snackbar.open("Logged In", 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      })
      this.route.navigate(['/admin/add-employee'])
    }else{
      this.service.getEmployeeLogin(this.loginForm).subscribe({
        next:value =>
        {
          localStorage.setItem('auth_token' , value.jwt,)
          localStorage.setItem('user' , JSON.stringify(value))
          this.snackbar.open("Logged In", 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000,
          })
          this.route.navigate(['/employee/attendance'])
        },
        error:err =>
        {
          this.snackbar.open("Unauthorized", 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000,
          })
        }
      })
    }
  }
}
