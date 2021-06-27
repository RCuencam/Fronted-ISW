import { Component, OnInit } from '@angular/core';
import {InterviewApiService} from "../../services/interview-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Interview} from "../../models/interview";

@Component({
  selector: 'app-interview-postulant-all',
  templateUrl: './interview-postulant-all.component.html',
  styleUrls: ['./interview-postulant-all.component.css']
})
export class InterviewPostulantAllComponent implements OnInit {

  postulantId!: number

  interviewInfo: Interview;

  fecha = new Date();

  prueba!: []

  constructor(private interview_service : InterviewApiService,
              private router: Router,
              private route: ActivatedRoute) {
    this.interviewInfo = {} as Interview;
  }

  ngOnInit(): void {
    this.getInterviewByPostulantId();
  }

  getInterviewByPostulantId(): void{
    this.postulantId = Number(this.route.params.subscribe(paramsPostulant => {
      this.interview_service.getInterviewByPostulantId(paramsPostulant.postulantId)
        .subscribe((response : any) => {
          for(var i=0;i<response.content.length;i++){
            this.interviewInfo = response.content[i];
            this.prueba = response.content[i].id;
          }
          console.log(this.interviewInfo)
          console.log(this.prueba)
          console.log(response);
        })
      }
    ))
  }

  getPostulant() : void{
    for(var i=0;i<this.prueba.length;i++){
    }
  }

}
