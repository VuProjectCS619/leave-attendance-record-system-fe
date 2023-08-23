import {Component, OnInit} from '@angular/core';
import {IAddEmployee} from "../../interfaces/dtos";
import {Router} from "@angular/router";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";


@Component({
  selector: 'side-nav-employee',
  templateUrl: './side-nav-employee.component.html',
  styleUrls: ['./side-nav-employee.component.css']
})
export class SideNavEmployeeComponent implements OnInit{
  constructor(private router:Router, private snackbar:MatSnackBar) {}

  user: IAddEmployee = JSON.parse(localStorage.getItem("user") || "");
  greeting:string  = this.user ? this.user.name : "";

  //snackbar variables
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  logOut(){
    localStorage.clear()
    localStorage.removeItem("user");
    this.router.navigate(['']);
    this.snackbar.open("Logged out", 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }

  options = [
    { name: 'Attendance', active: false, path:"/employee/attendance", icon:"book" },
    { name: 'Apply for Leave', active: false, path:"/employee/apply-for-leave", icon:"time_to_leave" },
    { name: 'Leave/Attendance Record', active: false, path:"/employee/record", icon:"receipt" },
    { name: 'Account Settings', active: false, path:"/employee/account-setting", icon:"settings" },
  ];

  // Function to set the selected option
  setSelectedOption(option: any) {
    this.options.forEach(opt => (opt.active = opt === option));
  }

  ngOnInit() {
    this.setSelectedOption(this.options[0])
  }
}
