import {Component, Inject} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {IUpdateEmployee} from "../../interfaces/dtos";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-update-employee-dialog',
  templateUrl: './update-employee-dialog.component.html',
  styleUrls: ['./update-employee-dialog.component.css']
})
export class UpdateEmployeeDialogComponent {

  constructor(private service:AdminService, @Inject(MAT_DIALOG_DATA) public empData: string) { }

  updateEmployeeForm:IUpdateEmployee =
    {
      salary: 0,
      contact: "",
      designation: "",
      name: "",
      password: "",
      allowedCasualLeaves: 0,
      allowedCompensatoryLeaves: 0,
      allowedEarnedLeaves: 0
    }
  getEmployeeList(){
    this.service.getEmployee().subscribe({
      next:value =>
      {
        console.log(value)
      },
      error:err => console.log(err),
    })
  }
  updateEmployee()
  {
    this.service.updateEmployee(this.updateEmployeeForm, this.empData).subscribe({
      next:value =>{
        console.log(value)
        this.getEmployeeList()

      },
      error:err => console.log(err)
    })
  }
}
