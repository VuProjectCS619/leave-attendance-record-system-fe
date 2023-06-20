import { Component } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {IUpdateProfileSetting} from "../../interfaces/dtos";

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent {
  constructor(private service:EmployeeService) {
  }
myName:string="Muhammad Osama Iftikhar"
  myEmail:string="osama@abc.com"
  mySalary:number=100000
  myDesignation:string="Angular Developer"
  myContact:string="+923136784434"

  updateProfileSettingForm:IUpdateProfileSetting =
    {
      name: "",
      password: ""
    }
  updateSetting()
  {
    this.service.updateProfileSetting(this.updateProfileSettingForm).subscribe({
      next:value => console.log(value),
      error:err => console.log(err)
    })
  }

}
