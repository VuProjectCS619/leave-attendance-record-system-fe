import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountLoginService {

  constructor(private http:HttpClient) { }

  getLogin(form:any)
  {
    return this.http.post("", form);
  }
}
