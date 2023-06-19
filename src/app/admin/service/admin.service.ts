import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getEmployee()
  {
    return this.http.get("");
  }
  getEmployeeAttendanceRecord()
  {
    return this.http.get("");
  }
  getEmployeeLeaveRecord()
  {
    return this.http.get("");
  }
  addEmployee(form:any)
  {
    return this.http.post("", form);
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
