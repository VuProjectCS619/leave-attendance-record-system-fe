import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  userName:string = "Muhamamd Osama Iftikhar"
  email:string = "osama@abc.com"
  timeIn: string = "11:00 AM"
  timeOut:string = "8:00 PM"
}
