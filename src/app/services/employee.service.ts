import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployeeLeaveStatus():Observable<any>
  {
    return this.http.get("user/leave-applications")
  }
  getAttendance():Observable<any>
  {
    return this.http.get("attendance")
  }
  getAttendanceRecord(id:any)
  {
    return this.http.get(`/, ${id}`);
  }
  getLeaveRecord():Observable<any>
  {
    return this.http.get("user/leave-records");
  }

  applyForLeave(form:any):Observable<any>
  {
    return this.http.post("leave/application", form);
  }
  updateProfileSetting(form:any)
  {
    return this.http.patch("user/profile/", form);
  }
  logTimeIn():Observable<any>
  {
    return this.http.post("attendance/logintime", "")
  }
  logTimeOut():Observable<any>
  {
    return this.http.post("attendance/logouttime", "")
  }

}
