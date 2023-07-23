import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements  OnInit{
  employeeLeaveRecord:any // to get leave record
  user:any // to get employee record -> fetching id from user
  employeeAttendanceRecord:any // to get attendance record

  constructor(private service:AdminService) {}
  ngOnInit()
  {
      this.service.getEmployeeLeaveRecord().subscribe({
        next:value => {
          console.log(value)
          this.employeeLeaveRecord = value
        },
        error: err => {
          console.log(err)
        }
      })

  }
  getAttendance(id:any)
  {
    this.service.getEmployeeAttendanceRecord(id).subscribe({
      next:value => {
        console.log(value)
        this.employeeAttendanceRecord = value
      },
      error:err => {
        console.log(err)
      }
    })
  }

}
