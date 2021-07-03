import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {JobNewApiService} from "../../services/job-new-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dialog-job-new',
  templateUrl: './dialog-job-new.component.html',
  styleUrls: ['./dialog-job-new.component.css']
})
export class DialogJobNewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogJobNewComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string = "contrat",private route: ActivatedRoute
  ) { }
  employeerId!: number;



  ngOnInit(): void {
    this.route.params.subscribe(params=>this.employeerId=params.employeerId);
  }

}
