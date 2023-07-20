import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminService} from "../../services/admin.service";




export interface leave {
  name: string,
  employeeID: string,
  employeeDesignation: string,
  allowedLeave: number
}

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent implements OnInit  {
leaves:any
  constructor(public dialog: MatDialog, private service:AdminService) {}

ngOnInit()
{
  this.service.getEmployeeLeaves().subscribe({
    next:value => {
      console.log(value)
      this.leaves =value
    },
    error:err => {
      console.log(err)
    }
  })
}

  leaveRequests = [
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      reason: "I have an emergency."
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      reason: "I have an emergency."
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      reason: "I have an emergency."
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      reason: "I have an emergency."
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      reason: "I have an emergency."
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      reason: "I have an emergency."
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      reason: "I have an emergency."
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      reason: "I have an emergency."
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      reason: "I have an emergency."
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      reason: "I have an emergency."
    },

  ]

}
