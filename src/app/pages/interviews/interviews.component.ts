import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Interview} from "../../models/interview";
import {InterviewApiService} from "../../services/interview-api.service";

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})

export class InterviewsComponent implements OnInit {
  //Variables que se necesita para el get
  postulantId!: number;
  jobOfferId!: number

  interviewData: Interview;
  interviewId!: number

  fecha = new Date();

  //Inyeccion
  constructor(private interview_service : InterviewApiService,
              private router: Router,
              private route: ActivatedRoute) {
    this.interviewData = {} as Interview;
  }

  ngOnInit(): void {
    this.getallInterview();
  }

  getallInterview(){
    this.postulantId = Number(this.route.params.subscribe(paramsPostulant => {
      this.jobOfferId = Number(this.route.params.subscribe((paramsJobOffer => {
        this.interview_service.getInterviewByPostulantIdAndJobOfferId(paramsPostulant.postulantId, paramsJobOffer.jobOfferId)
          .subscribe((response: any) => {
            this.interviewData = response.content[0];
            console.log(response);
          });
      })));
    }));
  }

}
