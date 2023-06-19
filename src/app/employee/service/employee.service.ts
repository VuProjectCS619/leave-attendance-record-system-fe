import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
  applyForLeave(form:any,id:any)
  {
    return this.http.post(`/, ${id}`, form);
  }
  updateProfileSetting(form:any,id:any)
  {
    return this.http.put(`/, ${id}`, form);
  }

  /* TODO: Time In and Time Out Service */
}
