import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';
import {IApplyForLeave} from "../../interfaces/dtos";
import {EmployeeService} from "../service/employee.service";


@Component({
  selector: 'app-apply-for-leave',
  templateUrl: './apply-for-leave.component.html',
  styleUrls: ['./apply-for-leave.component.css']
})
export class ApplyForLeaveComponent {
constructor(private service:EmployeeService) {
}
  // toDate = new FormControl(new Date());
  // fromDate = new FormControl(new Date());
  userName:string = "Muhamamd Osama Iftikhar"
  email:string = "osama@abc.com"
  allowedLeaves: number = 5
  consumedLeaves:number = 5
  balance:number = 0
  appliedForLeave:string = "Jan, 05, 2023"
  status:string = "Pending"

  applyLeaveForm:IApplyForLeave =
  {
    LeaveType: "",
    descriptionLeave: "",
    fromDate: "",
    reason: "",
    toDate: ""
  }


  applyLeave()
  {
    this.service.applyForLeave(this.applyLeaveForm).subscribe({
      next:value => console.log(value),
      error:err => console.log(err)
    })
  }


  leaveStatus = [
    {
      appliedForLeave:"Jan, 05, 2023 - Jan, 07, 2023",
      status:"Pending"
    },
    {
      appliedForLeave:"Jan, 05, 2023 - Jan, 07, 2023",
      status:"Pending"
    },
    {
      appliedForLeave:"Jan, 05, 2023 - Jan, 07, 2023",
      status:"Pending"
    }
  ]


}
