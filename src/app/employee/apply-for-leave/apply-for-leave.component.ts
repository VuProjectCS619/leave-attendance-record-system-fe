import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-apply-for-leave',
  templateUrl: './apply-for-leave.component.html',
  styleUrls: ['./apply-for-leave.component.css']
})
export class ApplyForLeaveComponent {
  selectedDate = new FormControl(new Date());
  userName:string = "Muhamamd Osama Iftikhar"
  id:string = "EM100000"
  allowedLeaves: number = 3
  consumedLeaves:number = 1
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
