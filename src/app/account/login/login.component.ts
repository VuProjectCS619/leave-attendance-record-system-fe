import { Component } from '@angular/core';
import { Router} from "@angular/router";
import {ILogin} from "../../interfaces/dtos";
import {AccountLoginService} from "../../services/account.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:AccountLoginService  , private route : Router) {}
  empty = true
  hide= true

  loginForm:ILogin =
  {
    email: "",
    password: "",
  }

  // check if email == admin go to admin dashboard else employee
  loggedIn(){

    if(this.loginForm.email === "admin@xyz.com" && this.loginForm.password === "password" )
    {
      this.route.navigate(['/admin/add-employee'])
    }else{
      this.service.getEmployeeLogin(this.loginForm).subscribe({
        next:value =>
        {
          localStorage.setItem('auth_token' , value.jwt,)
          localStorage.setItem('user' , JSON.stringify(value))
          console.log(value)

          this.route.navigate(['/employee/attendance'])
        },
        error:err =>
        {
          console.log(err)
        }
      })
    }

  }

}
