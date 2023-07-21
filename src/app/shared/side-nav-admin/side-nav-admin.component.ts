import { Component } from '@angular/core';

@Component({
  selector: 'side-nav-admin',
  templateUrl: './side-nav-admin.component.html',
  styleUrls: ['./side-nav-admin.component.css']
})
export class SideNavAdminComponent {
  options = [
    { name: 'Add an Employee', active: false, path:"/admin/add-employee", icon:"note_add" },
    { name: 'Employee Management ', active: false, path:"/admin/employee-management", icon:"supervised_user_circle" },
    { name: 'Leave Request Management', active: false, path:"/admin/leave-management", icon:"build" },
    { name: 'Leave/Attendance Record', active: false, path:"/admin/record", icon:"receipt" },
    { name: 'Logout', active: false, path:"", icon:"exit_to_app" }
  ];

  // Function to set the selected option
  setSelectedOption(option: any) {
    this.options.forEach(opt => (opt.active = opt === option));
  }
}
