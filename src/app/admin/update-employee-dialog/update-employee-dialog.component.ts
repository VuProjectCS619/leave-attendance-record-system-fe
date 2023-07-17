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
      contactNumber: "",
      designation: "",
      name: "",
      password: "",
      salary: 0,
      allowedCasualLeaves: 0,
      allowedCompensatoryLeaves: 0,
      allowedEarnedLeaves: 0,
    }

  updateEmployee()

  {
    this.service.updateEmployee(this.updateEmployeeForm, this.empData).subscribe({
      next:value =>{
        console.log(value)
        alert("Updated")

      },
      error:err => console.log(err)
    })
  }


}
