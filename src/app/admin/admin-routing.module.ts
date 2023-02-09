import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {EmployeeManagementComponent} from "./employee-management/employee-management.component";
import {RecordComponent} from "./record/record.component";
import {LeaveManagementComponent} from "./leave-management/leave-management.component";

const routes: Routes = [
  {
    path:"admin",
    component: AdminComponent,
    children:[
      {
        path:"add-employee",
        component: AddEmployeeComponent
      },
      {
        path: "employee-management",
        component: EmployeeManagementComponent
      },
      {
        path: "leave-management",
        component: LeaveManagementComponent
      },
      {
        path:"record",
        component: RecordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
