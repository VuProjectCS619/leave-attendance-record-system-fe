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


@NgModule({
  declarations: [
    AdminComponent,
    AddEmployeeComponent,
    EmployeeManagementComponent,
    LeaveManagementComponent,
    RecordComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatTabsModule,
        MatTableModule
    ]
})
export class AdminModule { }
