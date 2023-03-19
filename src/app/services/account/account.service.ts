import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAdminLogin} from "../../interfaces/dtos";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }

  adminLogin(form:IAdminLogin){
    return this.http.post<any>("admin" , form)
  }
}
