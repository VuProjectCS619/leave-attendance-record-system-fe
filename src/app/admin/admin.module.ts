import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { RecordComponent } from './record/record.component';
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDialogModule} from "@angular/material/dialog";
import { AddLeaveDialogComponent } from './add-leave-dialog/add-leave-dialog.component';
import { ViewRecordDialogComponent } from './view-record-dialog/view-record-dialog.component';
import { UpdateEmployeeDialogComponent } from './update-employee-dialog/update-employee-dialog.component';
import { DeleteEmployeeConfirmationDialogComponent } from './delete-employee-confirmation-dialog/delete-employee-confirmation-dialog.component';
import { RestrictNegativeNumericValueDirective } from './restrict-negative-numeric-value.directive';
import {FormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AdminComponent,
    AddEmployeeComponent,
    EmployeeManagementComponent,
    LeaveManagementComponent,
    RecordComponent,
    AddLeaveDialogComponent,
    ViewRecordDialogComponent,
    UpdateEmployeeDialogComponent,
    DeleteEmployeeConfirmationDialogComponent,
    RestrictNegativeNumericValueDirective,
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatTabsModule,
        MatTableModule,
        MatExpansionModule,
        MatDialogModule,
        FormsModule,
        MatOptionModule,
        MatSelectModule
    ]
})
export class AdminModule { }
