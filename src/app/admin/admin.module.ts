import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { RecordComponent } from './record/record.component';


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
    AdminRoutingModule
  ]
})
export class AdminModule { }
