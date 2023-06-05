import { Component } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent {
myName:string="Muhammad Osama Iftikhar"
  myEmail:string="osama@abc.com"
  mySalary:number=100000
  myDesignation:string="Angular Developer"
  myContact:string="+923136784434"

}
