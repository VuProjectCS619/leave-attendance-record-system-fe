import { Component } from '@angular/core';
import {AdminService} from "../service/admin.service";
import {IAddEmployeeLeave} from "../../interfaces/dtos";

@Component({
  selector: 'app-add-leave-dialog',
  templateUrl: './add-leave-dialog.component.html',
  styleUrls: ['./add-leave-dialog.component.css']
})
export class AddLeaveDialogComponent {
  constructor(private service:AdminService) { }
  empName:string = "Muhammad Osama Iftikhar"

  addLeaveForm:IAddEmployeeLeave =
    {
      leave: 0
    }

    addLeave()
    {
      this.service.addEmployeeLeave(this.addLeaveForm,0).subscribe({
        next:value => console.log(value),
        error:err => console.log(err)
      })
    }
}
