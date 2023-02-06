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

  id = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.id.hasError('required')) {
      return 'You must enter your ID  ';
    }

    return this.id.hasError('id') ? 'Not a valid ID' : '';
  }
}
