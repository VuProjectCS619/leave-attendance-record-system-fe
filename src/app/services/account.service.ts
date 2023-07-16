import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AccountLoginService {

  constructor(private http:HttpClient) { }

  getEmployeeLogin(form:any):Observable<any>
  {
    return this.http.post("user/signin", form);
  }

  getLoginAdmin(form:any) :Observable<any>{
    return  this.http.post('admin',form)
  }

}
