import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccountModule} from "./account/account.module";
import {SharedModule} from "./shared/shared.module";
import {EmployeeModule} from "./employee/employee.module";
import {AdminModule} from "./admin/admin.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BaseUrlInterceptor} from "./interceptors/base-url.interceptor";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccountModule,
    SharedModule,
    EmployeeModule,
    AdminModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
