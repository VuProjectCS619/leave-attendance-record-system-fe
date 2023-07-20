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
  updateEmployee(form:any, id:any):Observable<any>
  {

    return this.http.patch(`employee/${id}`, form);
  }
  deleteEmployee( id:any)
  {
    return this.http.delete(`employee/${id}`);
  }
  getEmployeeLeaves()
  {
    return this.http.get("admin/leave-applications")
  }
  acceptLeave(dataa:any)
  {
    const data ={
      applicationId: "",
      status: "Accepted"
    }
    return this.http.patch("admin/leave-applications",dataa)
  }
  /* TODO: Accept and Reject Leave Service */
}
