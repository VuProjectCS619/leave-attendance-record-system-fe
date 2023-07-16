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

  // check if email == admin go to admin dashboard else employee
  adminlogin(){
    this.service.getLoginAdmin(this.loginForm).subscribe({
      next:value => {
      console.log(value)

               if (value.email === "admin@xyz.com"){
                if (value.password ==="password" && value.isAdmin == true){
                   this.route.navigate(['/admin/add-employee'])
                }
               }

    } ,
      error:err => console.log(err)
    })
  }
  employeeLogin ()
  {
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
