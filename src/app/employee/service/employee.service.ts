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
  getAllowedLeave()
  {
    return this.http.get(`/`);
  }
  applyForLeave(form:any)
  {
    return this.http.post(`/`, form);
  }
  updateProfileSetting(form:any)
  {
    return this.http.put(`/`, form);
  }

  /* TODO: Time In and Time Out Service */
}
