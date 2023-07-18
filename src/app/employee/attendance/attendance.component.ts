import {Component} from '@angular/core';
import {EmployeeService} from "../../services/employee.service";

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
  constructor(private service:EmployeeService) {
  }
  public token = localStorage.getItem("auth_token")

  logTimeIn()
  {
    const timeIn = new Date()
    this.service.logTimeIn(timeIn,this.token).subscribe({
      next:value => {
        console.log(value)

        this.timeIn = value
      },
      error:err => console.log(err)
    })
  }
  logTimeOut()
  {
    const timeout = new Date()
    this.service.logTimeOut(timeout,this.token).subscribe({
      next:value => {
        console.log(value)

        this.timeOut = value
      },
      error:err => console.log(err)
    })
  }
}
