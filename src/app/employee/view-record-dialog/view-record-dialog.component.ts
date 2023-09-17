import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {EmployeeService} from "../../services/employee.service";
import {IAttendanceDate} from "../../interfaces/dtos";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-view-record-dialog',
  templateUrl: './view-record-dialog.component.html',
  styleUrls: ['./view-record-dialog.component.css']
})
export class ViewRecordDialogComponent {

  constructor(private service:EmployeeService, @Inject(MAT_DIALOG_DATA) public data:any, private datePipe: DatePipe) {}

  dateForm:IAttendanceDate = {
    fromDate: "", toDate: ""
  }

  leaveRecord:any

  getAttendance(){
    let  formattedFromDate:any=null
    let  formattedToDate:any = null;

    if(this.dateForm.fromDate && this.dateForm.toDate)
    {
      let fromDate = new Date(this.dateForm.fromDate);
      let toDate = new Date(this.dateForm.toDate);
      fromDate.setSeconds(1);
      toDate.setHours(23);
      toDate.setMinutes(59);
      toDate.setSeconds(59);
       formattedFromDate = this.datePipe.transform(fromDate, 'yyyy-MM-dd HH:mm:ss', 'en-US');
       formattedToDate = this.datePipe.transform(toDate, 'yyyy-MM-dd HH:mm:ss', 'en-US');
    }

    this.service.getAttendance(formattedFromDate,formattedToDate).subscribe({
      next:value => {
        this.leaveRecord = value
      },
      error:err => {
        console.log(err)
      }
    })
  }
}
