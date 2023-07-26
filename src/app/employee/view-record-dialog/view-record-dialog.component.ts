import {Component, Inject} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-view-record-dialog',
  templateUrl: './view-record-dialog.component.html',
  styleUrls: ['./view-record-dialog.component.css']
})
export class ViewRecordDialogComponent {

  constructor(private service:AdminService, @Inject(MAT_DIALOG_DATA) public data:any) {}

}
