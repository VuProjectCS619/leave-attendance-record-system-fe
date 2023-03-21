import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-apply-for-leave',
  templateUrl: './apply-for-leave.component.html',
  styleUrls: ['./apply-for-leave.component.css']
})
export class ApplyForLeaveComponent {
  // toDate = new FormControl(new Date());
  // fromDate = new FormControl(new Date());
  userName:string = "Muhamamd Osama Iftikhar"
  id:string = "EM100000"
  allowedLeaves: number = 5
  consumedLeaves:number = 5
  balance:number = 0
  appliedForLeave:string = "Jan, 05, 2023"
  status:string = "Pending"


  leaveStatus = [
    {
      userName : "Muhamamd Osama Iftikhar",
      id: "EM100000",
      appliedForLeave:"Jan, 05, 2023",
      status:"Pending"
    },
    {
      userName : "Muhamamd Osama Iftikhar",
      id: "EM100000",
      appliedForLeave:"Jan, 15, 2023",
      status:"Pending"
    },
    {
      userName : "Muhamamd Osama Iftikhar",
      id: "EM100000",
      appliedForLeave:"Jan, 25, 2023",
      status:"Pending"
    }
  ]
}
