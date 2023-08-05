import {Component, OnInit} from '@angular/core';
import {IAddEmployee, ILogin} from "../../interfaces/dtos";

@Component({
  selector: 'side-nav-employee',
  templateUrl: './side-nav-employee.component.html',
  styleUrls: ['./side-nav-employee.component.css']
})
export class SideNavEmployeeComponent implements OnInit{
  user: IAddEmployee = JSON.parse(localStorage.getItem("user") || "")
  greeting:string  = this.user ? this.user.name : ""
  logOut(){
    localStorage.clear()
  }

  options = [
    { name: 'Attendance', active: false, path:"/employee/attendance", icon:"book" },
    { name: 'Apply for Leave', active: false, path:"/employee/apply-for-leave", icon:"time_to_leave" },
    { name: 'Leave/Attendance Record', active: false, path:"/employee/record", icon:"receipt" },
    { name: 'Account Settings', active: false, path:"/employee/account-setting", icon:"settings" },
    { name: 'Logout', active: false, path:"", icon:"exit_to_app" }
  ];

  // Function to set the selected option
  setSelectedOption(option: any) {
    this.options.forEach(opt => (opt.active = opt === option));
  }

  ngOnInit() {
    this.setSelectedOption(this.options[0])
  }
}
