import { Component } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {IUpdateEmployee} from "../../interfaces/dtos";

@Component({
  selector: 'app-update-employee-dialog',
  templateUrl: './update-employee-dialog.component.html',
  styleUrls: ['./update-employee-dialog.component.css']
})
export class UpdateEmployeeDialogComponent {
  constructor(private service:AdminService) { }

  updateEmployeeForm:IUpdateEmployee =
    {
      contactNumber: "",
      designation: "",
      email: "",
      name: "",
      password: "",
      salary: 0
    }

  updateEmployee()
  {
    this.service.updateEmployee(this.updateEmployeeForm, 0).subscribe({
      next:value => console.log(value),
      error:err => console.log(err)
    })
  }
}
