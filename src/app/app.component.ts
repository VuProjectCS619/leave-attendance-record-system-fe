import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empty = true
  hide= true

  id = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.id.hasError('required')) {
      return 'You must enter your ID  ';
    }

    return this.id.hasError('id') ? 'Not a valid ID' : '';
  }
  title = 'leave-attendance-record-system-fe';
}
