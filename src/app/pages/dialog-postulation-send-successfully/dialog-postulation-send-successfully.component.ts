import { Component,Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-postulation-send-successfully',
  templateUrl: './dialog-postulation-send-successfully.component.html',
  styleUrls: ['./dialog-postulation-send-successfully.component.css']
})
export class DialogPostulationSendSuccessfullyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogPostulationSendSuccessfullyComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string = "SEND") { }

  ngOnInit(): void {
  }

  onClickNo():void{
    this.dialogRef.close();
  }

}
