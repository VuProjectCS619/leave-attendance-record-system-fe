import { Component } from '@angular/core';

@Component({
  selector: 'app-view-record-dialog',
  templateUrl: './view-record-dialog.component.html',
  styleUrls: ['./view-record-dialog.component.css']
})
export class ViewRecordDialogComponent {
  employeeName:string = "Muhammad Osama Iftikhar"
  employeeAttendanceRecord = [
    {
      date: new Date(),
      day: new Date(),
      TimeLog:{
        timeIn:new Date(),
        timeOut:new Date()
      }
    },
    {
      date: new Date(),
      day: new Date(),
      TimeLog:{
        timeIn:new Date(),
        timeOut:new Date()
      }
    },
    {
      date: new Date(),
      day: new Date(),
      TimeLog:{
        timeIn:new Date(),
        timeOut:new Date()
      }
    },
    {
      date: new Date(),
      day: new Date(),
      TimeLog:{
        timeIn:new Date(),
        timeOut:new Date()
      }
    },
    {
      date: new Date(),
      day: new Date(),
      TimeLog:{
        timeIn:new Date(),
        timeOut:new Date()
      }
    },
    {
      date: new Date(),
      day: new Date(),
      TimeLog:{
        timeIn:new Date(),
        timeOut:new Date()
      }
    },
    {
      date: new Date(),
      day: new Date(),
      TimeLog:{
        timeIn:new Date(),
        timeOut:new Date()
      }
    },
  ]
}
