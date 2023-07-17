import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";




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
export class LeaveManagementComponent {

  constructor(public dialog: MatDialog) {}



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
