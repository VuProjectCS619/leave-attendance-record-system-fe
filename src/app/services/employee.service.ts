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
    return this.http.post("leave/application", form);
  }
  updateProfileSetting(form:any, id:string)
  {
    return this.http.patch(`user/profile/${id}`, form);
  }
  logTimeIn():Observable<any>
  {
    return this.http.post(`attendance/logintime`, "")
  }
  logTimeOut():Observable<any>
  {
    return this.http.post("attendance/logouttime", "")
  }

  getLeaveRecords(){
    return this.http.get("user/leave-records")
  }

}
