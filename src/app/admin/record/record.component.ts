import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ViewRecordDialogComponent} from "../view-record-dialog/view-record-dialog.component";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements  OnInit{
  employeeLeaveRecord:any
  constructor(public dialog: MatDialog, private service:AdminService) {}
  ngOnInit()
  {
      this.service.getEmployeeLeaveRecord().subscribe({
        next:value => {
          console.log(value)
          this.employeeLeaveRecord = value
        },
        error: err => {
          console.log(err)
        }
      })
  }

  openDialog() {
    this.dialog.open(ViewRecordDialogComponent);
  }

  employeeRecord =[
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
  ]
  leaveRecord = [
    {
      monthYear:"Jan, 2023",
      name: "Muhammad Osama Iftikhar",
      workingHours: 115,
      leaves: 3
    },
    { monthYear:"Feb, 2023",
      name: "Muhammad Osama Iftikhar",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Mar, 2023",
      name: "Muhammad Osama Iftikhar",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Apr, 2023",
      name: "Muhammad Osama Iftikhar",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"May, 2023",
      name: "Muhammad Osama Iftikhar",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Jun, 2023",
      name: "Muhammad Osama Iftikhar",
      eworkingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Jul, 2023",
      name: "Muhammad Osama Iftikhar",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Aug, 2023",
      name: "Muhammad Osama Iftikhar",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Sep, 2023",
      name: "Muhammad Osama Iftikhar",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Oct, 2023",
      name: "Muhammad Osama Iftikhar",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Nov, 2023",
      name: "Muhammad Osama Iftikhar",
      workingHours: 115,
      leaves: 3
    },
    {
      monthYear:"Dec, 2023",
      name: "Muhammad Osama Iftikhar",
      workingHours: 115,
      leaves: 3
    },
  ]
  attendanceRecord = [
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com"
    },
  ]
}
