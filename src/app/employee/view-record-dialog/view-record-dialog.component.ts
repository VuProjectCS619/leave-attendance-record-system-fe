import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-view-record-dialog',
  templateUrl: './view-record-dialog.component.html',
  styleUrls: ['./view-record-dialog.component.css']
})
export class ViewRecordDialogComponent {

  constructor(private service:EmployeeService, @Inject(MAT_DIALOG_DATA) public data:any) {}

  dateForm = {
    fromDate:"",
    toDate:""
  }

  getAttendance(){
    this.service.getAttendance(this.dateForm.fromDate, this.dateForm.toDate).subscribe({
      next:value => {
        console.log(value)
      },
      error:err => {
        console.log(err)
      }
    })
  }
}
