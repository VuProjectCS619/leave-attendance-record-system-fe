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
      date: "Jan, 05, 2023",
      day: "Monday",
      TimeLog:{
        timeIn:"9:00 AM",
        timeOut:"8:00 PM"
      }
    },
    {
      date: "Jan, 05, 2023",
      day: "Monday",
      TimeLog:{
        timeIn:"9:00 AM",
        timeOut:"8:00 PM"
      }
    },
    {
      date: "Jan, 05, 2023",
      day: "Monday",
      TimeLog:{
        timeIn:"9:00 AM",
        timeOut:"8:00 PM"
      }
    },
    {
      date: "Jan, 05, 2023",
      day: "Monday",
      TimeLog:{
        timeIn:"9:00 AM",
        timeOut:"8:00 PM"
      }
    },

  ]
}
