import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Interview} from "../../models/interview";
import {InterviewApiService} from "../../services/interview-api.service";
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})

export class InterviewsComponent implements OnInit {
  postulantId!: number;
  jobOfferId!: number

  interviewData: Interview;
  interviewId!: number

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private interview_service : InterviewApiService,
              private router: Router,
              private route: ActivatedRoute,
              private breakpointObserver: BreakpointObserver) {
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
            console.log(this.interviewData)
            console.log(response.content[0].date_Interview);
          });
      })));
    }));
  }

}
