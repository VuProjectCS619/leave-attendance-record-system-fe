import { Component } from '@angular/core';
import {IAddEmployee, ILogin} from "../../interfaces/dtos";

@Component({
  selector: 'side-nav-employee',
  templateUrl: './side-nav-employee.component.html',
  styleUrls: ['./side-nav-employee.component.css']
})
export class SideNavEmployeeComponent {
  user: IAddEmployee = JSON.parse(localStorage.getItem("user") || "")
  greeting:string  = this.user ? this.user.name : ""
  logOut(){
    localStorage.clear()
  }
}
