import { Component } from '@angular/core';


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

  addLeaves = [
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      employeeDesignation: "Angular Developer",
      allowedLeave: 3
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      employeeDesignation: "Angular Developer",
      allowedLeave: 3
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      employeeDesignation: "Angular Developer",
      allowedLeave: 3
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      employeeDesignation: "Angular Developer",
      allowedLeave: 3
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      employeeDesignation: "Angular Developer",
      allowedLeave: 3
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      employeeDesignation: "Angular Developer",
      allowedLeave: 3
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      employeeDesignation: "Angular Developer",
      allowedLeave: 3
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      employeeDesignation: "Angular Developer",
      allowedLeave: 3
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      employeeDesignation: "Angular Developer",
      allowedLeave: 3
    },
    {
      name: "Muhammad Osama Iftikhar",
      employeeEmail: "osama@abc.com",
      employeeDesignation: "Angular Developer",
      allowedLeave: 3
    },
  ]
}
