import {Component, OnInit} from '@angular/core';
import {ViewRecordDialogComponent} from "../view-record-dialog/view-record-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeService} from "../../services/employee.service";
import {IAttendanceDate,ILeaveRecordDate} from "../../interfaces/dtos";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit{

  recordAttendance:any
  item:any
  recordLeaves:any

  dateForm:ILeaveRecordDate = {
    fromDate: "", toDate: ""
  }
  constructor(public dialog: MatDialog, private service: EmployeeService, private datePipe: DatePipe) {}

  openRecord() {
    this.dialog.open(ViewRecordDialogComponent,{
    data:this.recordAttendance
    });
  }

  ngOnInit()
  {
    this.service.getAttendance().subscribe({
      next:value => {
        this.recordAttendance = value
      },
      error:err => {
        console.log(err)
      }
    })
    this.service.getWorkingHour().subscribe({
      next:value => this.item = value.WokedHours,
      error:err => console.log(err)
    });
    //getting leave records
    this.getleaveRecord()
  }

  getleaveRecord(){

    let  formattedLeaveFromDate:any = null
    let  formattedLeaveToDate:any = null;

    if(this.dateForm.fromDate && this.dateForm.toDate)
    {
      let fromDate = new Date(this.dateForm.fromDate);
      let toDate = new Date(this.dateForm.toDate);
      fromDate.setSeconds(1);
      toDate.setHours(23);
      toDate.setMinutes(59);
      toDate.setSeconds(59);
      formattedLeaveFromDate = this.datePipe.transform(fromDate, 'yyyy-MM-dd HH:mm:ss', 'en-US');
      formattedLeaveToDate = this.datePipe.transform(toDate, 'yyyy-MM-dd HH:mm:ss', 'en-US');
    }

    this.service.getLeaveRecord(formattedLeaveFromDate,formattedLeaveToDate).subscribe({
      next:value => {
        this.recordLeaves = value
        console.log(value)
      },
      error:err => {
        console.log(err)
      }
    })
  }

}
