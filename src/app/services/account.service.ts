import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountLoginService {

  constructor(private http:HttpClient) { }

  getLogin(form:any)
  {
    return this.http.post("192.168.100.7:3000/user/signin", form);
  }
   getThis(){
    return  this.http.get("192.168.100.7:3000");
  }
}
