import {Component, OnInit} from '@angular/core';
import {ViewRecordDialogComponent} from "../view-record-dialog/view-record-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit{

  recordAttendance:any

  recordLeaves ={
    allowedCasualLeaves:0,
    allowedCompensatoryLeaves: 0,
    allowedEarnedLeaves:0,
    consumedCasualLeaves:0,
    consumedCompensatoryLeaves:0,
    consumedEarnedLeaves:0
  }
  constructor(public dialog: MatDialog, private service: EmployeeService) {}

  openRecord() {
    this.dialog.open(ViewRecordDialogComponent,{
   data:this.recordAttendance
    });
  }

ngOnInit()
{
  this.service.getAttendance().subscribe({
    next:value => {
      console.log(value)
      this.recordAttendance = value
    },
    error:err => {
      console.log(err)
    }
  })

  this.service.getLeaveRecord().subscribe({
    next:value => {
      console.log(value)
      // this.recordLeaves = value.allowedCasualLeaves
      this.recordLeaves.allowedCasualLeaves = value.allowedCasualLeaves
      this.recordLeaves.allowedCompensatoryLeaves = value.allowedCompensatoryLeaves
      this.recordLeaves.allowedEarnedLeaves = value.allowedEarnedLeaves
      this.recordLeaves.consumedCasualLeaves = value.consumedCasualLeaves
      this.recordLeaves.consumedCompensatoryLeaves = value.consumedCompensatoryLeaves
      this.recordLeaves.consumedEarnedLeaves = value.consumedEarnedLeaves
    },
    error:err => {
      console.log(err)
    }
  })

}
  leaveEmployeeRecord= [
    {
      monthYear:"Jan, 2023",
      workingHours: 115,
      leaves: 3
    },
    { monthYear:"Feb, 2023",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Mar, 2023",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Apr, 2023",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"May, 2023",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Jun, 2023",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Jul, 2023",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Aug, 2023",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Sep, 2023",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Oct, 2023",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Nov, 2023",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Dec, 2023",
      workingHours: 115,
      leaves: 3
    },
  ]

}
