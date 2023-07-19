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
    this.service.logTimeIn().subscribe({
      next:value => {
        console.log(value)

      },
      error:err => console.log(err)
    })
  }
  logTimeOut()
  {
    this.service.logTimeOut().subscribe({
      next:value => {
        console.log(value)
      },
      error:err => console.log(err)
    })
  }
}
