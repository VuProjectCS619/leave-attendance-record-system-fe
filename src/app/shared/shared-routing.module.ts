import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SideNavAdminComponent} from "./side-nav-admin/side-nav-admin.component";
import {SideNavEmployeeComponent} from "./side-nav-employee/side-nav-employee.component";

const routes: Routes = [
  {
    path:"admin",
    component:SideNavAdminComponent
  },
  {
    path:"employee",
    component:SideNavEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
