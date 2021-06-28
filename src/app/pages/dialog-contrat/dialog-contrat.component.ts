import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-contrat',
  templateUrl: './dialog-contrat.component.html',
  styleUrls: ['./dialog-contrat.component.css']
})
export class DialogContratComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogContratComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string = "contrat"
  ) { }

  ngOnInit(): void {
  }

  onClickNo():void{
    this.dialogRef.close();
  }

}
