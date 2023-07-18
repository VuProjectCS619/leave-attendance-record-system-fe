import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http:HttpClient) { }

  getLeaveStatus(id:any)
  {
    return this.http.get(`/, ${id}`);
  }
  getAttendanceRecord(id:any)
  {
    return this.http.get(`/, ${id}`);
  }
  getLeaveRecord(id:any)
  {
    return this.http.get(`/, ${id}`);
  }
  getAllowedLeave()
  {
    return this.http.get(`/`);
  }
  getEmployee(id:string)
  {
    return this.http.get(`employee${id}`)
  }
  applyForLeave(form:any):Observable<any>
  {
    return this.http.post(`leave/application`, form);
  }
  updateProfileSetting(form:any)
  {
    return this.http.patch(``, form);
  }
  logTimeIn(data:any, token:any):Observable<any>
  {
    return this.http.post(`attendance/logintime/${token}`,data)
  }
  logTimeOut(data:any, token:any):Observable<any>
  {
    return this.http.post(`attendance/logouttime/${token}`, data)
  }

}
