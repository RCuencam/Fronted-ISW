import { Component, OnInit } from '@angular/core';
import {DialogContratComponent} from "../dialog-contrat/dialog-contrat.component";
import {MatDialog} from "@angular/material/dialog";
import {InterviewApiService} from "../../services/interview-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeerService} from "../../services/employeer.service";
import {Employeer} from "../../models/employeer";

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
