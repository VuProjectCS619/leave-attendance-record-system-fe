import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ApplyForLeaveComponent } from './apply-for-leave/apply-for-leave.component';
import { RecordComponent } from './record/record.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    EmployeeComponent,
    AttendanceComponent,
    ApplyForLeaveComponent,
    RecordComponent,
    AccountSettingComponent
  ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        SharedModule
    ]
})
export class EmployeeModule { }
