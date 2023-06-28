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
    password: ""
  }

  navigate() {
    // Check the user's role here
    let userRole = "employee";

    if (userRole === 'admin')
    {
      this.route.navigate(['/admin/add-employee']).then(r => true );
    }
    else if(userRole === 'employee')
    {
      this.route.navigate(['/employee/attendance']).then(r => true);
    }
    else
    {
      this.route.navigate(['']).then(r => false);
    }
  }
  login ()
  {
    this.service.getLogin(this.loginForm).subscribe({
      next:value =>
      {
        console.log(value)
        // if (value.userRole === 'admin')
        // {
        //   this.route.navigate(['/admin/add-employee']).then(r => true );
        // }
        // else if(value.userRole === 'employee')
        // {
        //   this.route.navigate(['/employee/attendance']).then(r => true);
        // }
        // else
        // {
        //   this.route.navigate(['']).then(r => false);
        // }
      },
      error:err =>
      {
        console.log(err)
      }
    })
  }

}
