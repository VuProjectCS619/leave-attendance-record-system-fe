import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./employee.component";
import {AccountSettingComponent} from "./account-setting/account-setting.component";
import {ApplyForLeaveComponent} from "./apply-for-leave/apply-for-leave.component";
import {AttendanceComponent} from "./attendance/attendance.component";
import {RecordComponent} from "./record/record.component";

const routes: Routes = [
  {
    path:"employee",
    component: EmployeeComponent,
    children: [
      {
        path:"account-setting",
        component: AccountSettingComponent
      },
      {
        path:"apply-for-leave",
        component:ApplyForLeaveComponent
      },
      {
        path: "attendance",
        component: AttendanceComponent
      },
      {
        path: "record",
        component:RecordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
