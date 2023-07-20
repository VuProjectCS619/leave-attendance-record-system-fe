import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {UpdateEmployeeDialogComponent} from "../update-employee-dialog/update-employee-dialog.component";
import {
  DeleteEmployeeConfirmationDialogComponent
} from "../delete-employee-confirmation-dialog/delete-employee-confirmation-dialog.component";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  empData:any // getting values here from api
  constructor(public dialog: MatDialog, public service:AdminService) {}

  updateEmpDialog(data:string) {
     this.dialog.open(UpdateEmployeeDialogComponent,{
      data,
    });


  }
  openDeleteDialog(data:string) {
    this.dialog.open(DeleteEmployeeConfirmationDialogComponent,{
       data,
    });
  }


  ngOnInit()
  {
      this.service.getEmployee().subscribe({
        next:value =>
        {
          console.log(value)
          this.empData = value
        },
        error:err => console.log(err),

      })
  }


}
