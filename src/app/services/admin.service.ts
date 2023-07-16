import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getEmployee():Observable<any>
  {
    return this.http.get("employee");
  }
  getEmployeeAttendanceRecord()
  {
    return this.http.get("");
  }
  getEmployeeLeaveRecord()
  {
    return this.http.get("");
  }
  addEmployee(form:any) :Observable<any>
  {
    return this.http.post("employee", form);
  }
  addEmployeeLeave(form:any, id:any)
  {
    return this.http.put(`/, ${id}`, form);
  }
  updateEmployee(form:any, id:any)
  {
    return this.http.put(`/, ${id}`, form);
  }
  deleteEmployee(form:any, id:any)
  {
    return this.http.put(`/, ${id}`, form);
  }

  /* TODO: Accept and Reject Leave Service */
}
