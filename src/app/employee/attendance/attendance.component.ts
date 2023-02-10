import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  userName:string = "Muhamamd Osama Iftikhar"
  id:string = "EM100000"
  timeIn: string = "11:00 AM"
  timeOut:string = "8:00 PM"
}
