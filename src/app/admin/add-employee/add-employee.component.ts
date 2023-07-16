import { Component } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {IAddEmployee} from "../../interfaces/dtos";
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
 constructor(private service:AdminService) { }

  addEmployeeForm:IAddEmployee =
    {
      contactNumber: "",
      designation: "",
      email: "",
      name: "",
      password: "",
      salary: 0,
      allowedCasualLeaves: 0,
      allowedCompensatoryLeaves: 0,
      allowedEarnedLeaves: 0,
    }

    addEmployee()
    {
     this.service.addEmployee(this.addEmployeeForm).subscribe({
       next:value => {
         console.log(value)
       },
       error:err => {
         console.log(err)
       }
     })
    }


}
