import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";

@NgModule({
    declarations: [
        SideNavComponent
    ],
  exports: [
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SharedModule { }
