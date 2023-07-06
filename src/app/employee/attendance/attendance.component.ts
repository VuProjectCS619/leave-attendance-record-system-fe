import {Component} from '@angular/core';

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

  logTimeIn()
  {
    this.timeIn = new Date()
  }
  logTimeOut()
  {
    this.timeOut = new Date()
  }
}
