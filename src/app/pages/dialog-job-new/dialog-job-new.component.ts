import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-job-new',
  templateUrl: './dialog-job-new.component.html',
  styleUrls: ['./dialog-job-new.component.css']
})
export class DialogJobNewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogJobNewComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string = "contrat"
  ) { }

  ngOnInit(): void {
  }

}
