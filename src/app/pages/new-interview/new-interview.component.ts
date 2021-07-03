import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogJobNewComponent} from "../dialog-job-new/dialog-job-new.component";
import {Interview} from "../../models/interview";
import {Postulantjobs} from "../../models/postulantjobs";
import {NewInterviewApiService} from "../../services/new-interview-api.service";
import {Interviewp} from "../../models/interviewp";
import {InterviewApiService} from "../../services/interview-api.service";

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

  acepptInterviews: Array<Interviewp> = [];

  constructor(private interviewApiService: NewInterviewApiService, private  interviewservice: InterviewApiService,
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
          console.log(this.jobOfferId)
          this.postulantId = paramsPostulant.postulantId;
        }))
      }))
    }))
    this.getAllPostulantJob();
  }

  getAllPostulantJob(){
    this.interviewApiService.getAllPostulantJob().subscribe((response: any) =>{
      this.postulantjobs = response.content
      for(var i=0;i<this.postulantjobs.length;i++){
      console.log(this.postulantjobs[i].prueba)

      }
      console.log(this.acepptInterviews.length)
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogJobNewComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }


  acceptInterview() {

    const newInterview = {date_Interview: this.interviewData.date_Interview, final_date_Interview: this.interviewData.final_date_Interview, link_Interview: this.interviewData.link_Interview}
      for (var i = 0; i < this.postulantjobs.length; i++) {

      if (this.postulantjobs[i].prueba === true) {

        this.interviewservice.addInterview(this.postulantjobs[i].idPostulant, this.postulantjobs[i].idJobOffer, newInterview).subscribe((response: any) => {

        });


      }
    }

}
}
