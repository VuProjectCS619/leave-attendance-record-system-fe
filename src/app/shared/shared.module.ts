import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { SideNavAdminComponent } from './side-nav-admin/side-nav-admin.component';
import { SideNavEmployeeComponent } from './side-nav-employee/side-nav-employee.component';

@NgModule({
    declarations: [
        SideNavAdminComponent,
        SideNavEmployeeComponent
    ],
  exports: [
    SideNavAdminComponent,
    SideNavEmployeeComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SharedModule { }
