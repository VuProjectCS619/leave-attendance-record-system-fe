import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import {RouterOutlet} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { LoginRoutingModule } from './login-routing.module';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
  ],
  exports: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        RouterOutlet,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        LoginRoutingModule,
        MatButtonModule,
        FormsModule
    ]
})
export class AccountModule { }
