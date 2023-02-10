import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  empty = true
  hide= true

  id = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
}
