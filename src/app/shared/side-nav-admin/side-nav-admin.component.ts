import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Component({
  selector: 'side-nav-admin',
  templateUrl: './side-nav-admin.component.html',
  styleUrls: ['./side-nav-admin.component.css']
})
export class SideNavAdminComponent implements OnInit{
  constructor(private router: Router, private snackbar:MatSnackBar) {}

  //snackbar variables
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  logOut(){
    localStorage.clear()
    this.router.navigate(['']);
    this.snackbar.open("Logged out", 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
  options = [
    { name: 'Add an Employee', active: false, path:"/admin/add-employee", icon:"note_add" },
    { name: 'Employee Management ', active: false, path:"/admin/employee-management", icon:"supervised_user_circle" },
    { name: 'Leave Request Management', active: false, path:"/admin/leave-management", icon:"build" },
    { name: 'Leave/Attendance Record', active: false, path:"/admin/record", icon:"receipt" },
  ];

  // Function to set the selected option
  setSelectedOption(option: any) {
    this.options.forEach(opt => (opt.active = opt === option));
  }

  ngOnInit() {
    this.setSelectedOption(this.options[0])
  }
}
