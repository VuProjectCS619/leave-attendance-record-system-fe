import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ApplyForLeaveComponent } from './apply-for-leave/apply-for-leave.component';
import { RecordComponent } from './record/record.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSelectModule} from "@angular/material/select";
import { ViewRecordDialogComponent } from './view-record-dialog/view-record-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AdminModule} from "../admin/admin.module";
import { TwoDigitValDirective } from './two-digit-val.directive';
import {MatListModule} from "@angular/material/list";






@NgModule({
  declarations: [
    EmployeeComponent,
    AttendanceComponent,
    ApplyForLeaveComponent,
    RecordComponent,
    AccountSettingComponent,
    ViewRecordDialogComponent,
    TwoDigitValDirective,


  ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        SharedModule,
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatSelectModule,
        MatDialogModule,
        FormsModule,
        AdminModule,
        MatListModule,

    ]
})
export class EmployeeModule { }
