import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements  OnInit{
  employeeLeaveRecord:any // to get leave record
  employeeAttendanceRecord:any // to get attendance record
  item:any

  constructor(private service:AdminService) {}
  ngOnInit()
  {
      this.service.getEmployeeLeaveRecord().subscribe({
        next:value => {
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
        this.employeeAttendanceRecord = value
      },
      error:err => {
        console.log(err)
      }
    })
  }

  getWorkingHour(id:any)
  {
    this.service.getEmployeeWorkingHours(id).subscribe({
      next:value => {
        console.log(value.WokedHours)
        this.item = value.WokedHours
      },
      error:err => {
        console.log(err)
      }
    })
  }

}
