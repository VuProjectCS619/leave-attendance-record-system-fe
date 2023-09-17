import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
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
  getAttendance(fromDate?: Date, toDate?: Date):Observable<any>
  {
    // Creating an instance of HttpParams to set query parameters
    let params = new HttpParams()
    // Checking if fromDate and toDate are provided and add them to the params if they exist
    if (fromDate) {
      params = params.set('fromDate', fromDate.toString());
    }

    if (toDate) {
      params = params.set('toDate', toDate.toString());
    }
    return this.http.get("attendance", { params })
  }
  getWorkingHour():Observable<any>
  {
    return this.http.get("attendance/workinghours")
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
