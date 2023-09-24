import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
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
  getEmployeeAttendanceRecord(id:string):Observable<any>
  {
    return this.http.get(`admin/${id}/attendance`);
  }
  getEmployeeWorkingHours(id:string):Observable<any>
  {
    return this.http.get(`admin/${id}/workinghours`);

  }
  getEmployeeLeaveRecord():Observable<any>
  {
    return this.http.get("admin/leave-records");
  }
  addEmployee(form:any) :Observable<any>
  {
    return this.http.post("employee", form);
  }
  updateEmployee(form:any, id:any):Observable<any>
  {

    return this.http.patch(`employee/${id}`, form);
  }
  deleteEmployee( id:any):Observable<any>
  {
    return this.http.delete(`employee/${id}`);
  }
  getEmployeeLeaves(status?:string):Observable<any>
  {
    let params = new HttpParams();

    if (status) {
      params = params.set('status', status);
    }

    return this.http.get("admin/leave-applications", { params })
  }
  approveLeave(data:any):Observable<any>
  {
    return this.http.patch("admin/leave-applications",data)
  }
}
