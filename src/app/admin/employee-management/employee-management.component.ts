import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddLeaveDialogComponent} from "../add-leave-dialog/add-leave-dialog.component";
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
emp:any
  constructor(public dialog: MatDialog, private service:AdminService) {}

  openDialog() {
    this.dialog.open(UpdateEmployeeDialogComponent,{
      data: this.emp
    });
  }
  openDeleteDialog() {
    this.dialog.open(DeleteEmployeeConfirmationDialogComponent,{
      data:this.emp
    });
  }

  ngOnInit(){
    this.service.getEmployee().subscribe({
      next:value =>
      {
        console.log(value)
        this.emp = value
      },
      error:err => console.log(err),

    })
  }

}
