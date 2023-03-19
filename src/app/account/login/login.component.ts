import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IAdminLogin} from "../../interfaces/dtos";
import {AccountService} from "../../services/account/account.service";
import { Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service : AccountService , private route : Router) {
  }
  empty = true
  hide= true

  id = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  // @ts-ignore
  form = new FormGroup<IAdminLogin>({
    username: this.id || "",
    password: this.password || ""
  })


  onClick (){
    // console.log(this.form.value)
    this.service.adminLogin(this.form.value).subscribe({
      next: value => {
        console.log(value)
        this.route.navigateByUrl("/admin")
      },
      error: err => {
        console.log(err)
      }
      }
    )
  }

}
