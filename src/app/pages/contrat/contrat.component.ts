import { Component, OnInit } from '@angular/core';
import {DialogContratComponent} from "../dialog-changes-saved-successfully/dialog-contrat.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContratComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }
}
