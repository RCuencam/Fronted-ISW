import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Job} from "../../models/job";
import {JobNewApiService} from "../../services/job-new-api.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogJobNewComponent} from "../dialog-job-new/dialog-job-new.component";

@Component({
  selector: 'app-job-offer-new-component',
  templateUrl: './job-offer-new-component.component.html',
  styleUrls: ['./job-offer-new-component.component.css']
})
export class JobOfferNewComponentComponent implements OnInit {
  jobOfferForm!: NgForm;
  jobOfferData: Job = {} as Job;

  employeerId!: number;

  constructor(private jobOfferApiService: JobNewApiService,
              private route: ActivatedRoute,
              public dialog: MatDialog,) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>this.employeerId=params.employeerId);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogJobNewComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }

  AddJobOfferNew(): void{
    const newJobOffer = {description: this.jobOfferData.description, begin_date_offer: this.jobOfferData.begin_date_offer, final_date_offer: this.jobOfferData.final_date_offer, salary: this.jobOfferData.salary, direction: this.jobOfferData.direction, type: this.jobOfferData.type, title: this.jobOfferData.title };
    this.jobOfferApiService.addJobOffer(newJobOffer, this.employeerId).subscribe((response: any) => {console.log(response)});
  }

}
