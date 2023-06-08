import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { SideNavAdminComponent } from './side-nav-admin/side-nav-admin.component';
import { SideNavEmployeeComponent } from './side-nav-employee/side-nav-employee.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

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
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class SharedModule { }
