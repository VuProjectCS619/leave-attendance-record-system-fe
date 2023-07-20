import {Component, OnInit} from '@angular/core';
import {IAddEmployee, IApplyForLeave} from "../../interfaces/dtos";
import {EmployeeService} from "../../services/employee.service";


@Component({
  selector: 'app-apply-for-leave',
  templateUrl: './apply-for-leave.component.html',
  styleUrls: ['./apply-for-leave.component.css']
})
export class ApplyForLeaveComponent  implements OnInit{
constructor(private service:EmployeeService) {}

  leaveStats:any

  applyLeaveForm:IApplyForLeave =
  {
    leaveType: "",
    // hh: "",
    // mm:"",
    descriptionLeave: "",
    fromDate: "",
    reason: "",
    toDate: ""
  }

  user: IAddEmployee = JSON.parse(localStorage.getItem("user") || "")
  allowedCasualLeaves:number  = this.user ? this.user.allowedCasualLeaves : 0
  allowedCompensatoryLeaves:number  = this.user ? this.user.allowedCompensatoryLeaves : 0
  allowedEarnedLeaves:number  = this.user ? this.user.allowedEarnedLeaves : 0
  consumedCasualLeaves:number  = this.user ? this.user.consumedCasualLeaves : 0
  consumedCompensatoryLeaves:number  = this.user ? this.user.consumedCompensatoryLeaves : 0
  consumedEarnedLeaves:number  = this.user ? this.user.consumedEarnedLeaves : 0
  balanceCasualLeaves:number = this.user.allowedCasualLeaves - this.user.consumedCasualLeaves
  balanceCompensatoryLeaves:number = this.user.allowedCompensatoryLeaves - this.user.consumedCompensatoryLeaves
  balanceEarnedLeaves:number = this.user.allowedEarnedLeaves - this.user.consumedEarnedLeaves
  applyLeave()
  {
    this.service.applyForLeave(this.applyLeaveForm).subscribe({

      next:value => console.log(value),
      error:err => console.log(err)
    })
  }

  ngOnInit() {
  this.service.getEmployeeLeaveStatus().subscribe({
    next:value => {
      console.log(value)
      this.leaveStats = value
    },
    error:err => {
      console.log(err)
    }
  })
  }

  leaveStatus = [
    {
      toDate:new Date(),
      toFrom:new Date(),
      status:"Pending"
    },
    {
      toDate:new Date(),
      toFrom:new Date(),
      status:"Pending"
    },
    {
      toDate:new Date(),
      toFrom:new Date(),
      status:"Pending"
    }
  ]

}
