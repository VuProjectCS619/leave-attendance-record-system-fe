import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  userName:string = "Muhammad Osama Iftikhar"
  email:string = "osama@abc.com"
  timeIn: any
  timeOut:any

  getTimeIn()
  {
    const currentDate = new Date();
    this.timeIn = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',});
  }
  getTimeOut()
  {
    const currentDate = new Date();
    this.timeOut = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',});
  }
}
