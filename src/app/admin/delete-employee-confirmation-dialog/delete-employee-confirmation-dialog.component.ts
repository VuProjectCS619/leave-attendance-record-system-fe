import {Component, Inject} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-employee-confirmation-dialog',
  templateUrl: './delete-employee-confirmation-dialog.component.html',
  styleUrls: ['./delete-employee-confirmation-dialog.component.css']
})
export class DeleteEmployeeConfirmationDialogComponent {
  empName:string = "Muhammad Osama Iftikhar"

  constructor(private service:AdminService, @Inject(MAT_DIALOG_DATA) public emp:any) {}

  deleteEmp(id:any)
  {
    this.service.deleteEmployee(id).subscribe({
      next:value => console.log(value),
      error:err => console.log(err)
    })
  }
}
