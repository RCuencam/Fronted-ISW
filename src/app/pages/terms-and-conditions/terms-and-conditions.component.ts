import { Component, OnInit } from '@angular/core';
import {DialogContratComponent} from "../dialog-changes-saved-successfully/dialog-contrat.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {

  constructor(  public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContratComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }
}
