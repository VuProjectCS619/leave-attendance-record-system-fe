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
    isAdmin:true
  }
  employeeLoginForm:ILogin= {
    email: "", password: ""

  }
  email:string= "admin@xyz.com"
  // check if email == admin go to admin dashboard else employee
  loggedIn(){
    if(this.loginForm.email === "admin@xyz.com" && this.loginForm.password === "password" && this.loginForm.isAdmin === true )
    {
      this.route.navigate(['/admin/add-employee'])
    }else{
      this.service.getEmployeeLogin(this.employeeLoginForm).subscribe({
        next:value =>
        {
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

  employeeLogin ()
  {

  }


}
