import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Job} from "../../models/job";
import {JobNewApiService} from "../../services/job-new-api.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogJobNewComponent} from "../dialog-job-new/dialog-job-new.component";
import {Interview} from "../../models/interview";
import {InterviewApiService} from "../../services/interview-api.service";
import {Postulantjobs} from "../../models/postulantjobs";
import {NewInterviewApiService} from "../../services/new-interview-api.service";

@Component({
  selector: 'app-new-interview',
  templateUrl: './new-interview.component.html',
  styleUrls: ['./new-interview.component.css']
})
export class NewInterviewComponent implements OnInit {

  //Interview
  interviewData!: Interview

  //postulant
  postulantId! :number

  //Job Offer
  jobOfferId!: number

  //Employeer
  employeerId!: number;

  //PostulantJob
  postulantjobs:Array<Postulantjobs>=[];

  acepptInterview: Array<Boolean> = [];

  constructor(private interviewApiService: NewInterviewApiService,
              private route: ActivatedRoute,
              public dialog: MatDialog,) {
    this.interviewData={} as Interview;
  }

  ngOnInit(): void {
    this.employeerId = Number(this.route.params.subscribe(paramsEmployeer => {
      this.jobOfferId = Number(this.route.params.subscribe(paramsJobOffer => {
        this.postulantId = Number(this.route.params.subscribe(paramsPostulant =>{
          this.employeerId = paramsEmployeer.employeerId;
          this.jobOfferId = paramsJobOffer.jobOfferId;
          this.postulantId = paramsPostulant.postulantId;
        }))
      }))
    }))
    this.getAllPostulantJob();
  }

  getAllPostulantJob(){
    this.interviewApiService.getAllPostulantJob().subscribe((response: any) =>{
      this.postulantjobs = response.content
      console.log(this.postulantjobs)
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogJobNewComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }
/*
  AddJobOfferNew(): void{
    const newInterview = {description: this.interviewData., begin_date_offer: this.jobOfferData.begin_date_offer, final_date_offer: this.jobOfferData.final_date_offer, salary: this.jobOfferData.salary, direction: this.jobOfferData.direction, type: this.jobOfferData.type, title: this.jobOfferData.title };
    this.interviewApiService.addInterview(this.postulantId,newInterview, ).subscribe((response: any) => {console.log(response)});
  }
*/
}
