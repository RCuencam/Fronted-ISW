import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Interview} from "../../models/interview";
import {InterviewApiService} from "../../services/interview-api.service";
import {JobsApiService} from "../../services/jobs-api.service";
import {Job} from "../../models/job";
import * as moment from 'moment'

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})

export class InterviewsComponent implements OnInit {
  interviewId:number = 0;
  interviewInfo: Interview;

  jobId:number = 0;
  jobInfo: Job;

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  monthSelect: any;
  dateSelect: any;
  dateValue: any;

  constructor(private route:ActivatedRoute,
              private interviews_service: InterviewApiService,
              private job_service: JobsApiService) {
    this.route.params.subscribe(params=>this.jobId=params.id);
    this.route.params.subscribe(params=>this.interviewId=params.id);
    this.interviewInfo={} as Interview;
    this.jobInfo={}as Job;
  }

  ngOnInit(): void {
    this.getJobById();
    this.getInterviewById();
    this.getDaysFromDate(11, 2020)
  }

  getJobById():void{
    console.log(this.jobId);

    this.job_service.getJobById(this.jobId).subscribe((response: any) =>{
      this.jobInfo = response;
    });
  }

  getInterviewById():void{
    console.log(this.interviewId);

    this.interviews_service.getInterviewById(this.interviewId).subscribe((response: any) =>{
      this.interviewInfo = response;
    });
  }

  getDaysFromDate(month: number, year: number) : void {

    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });

    this.monthSelect = arrayDays;
  }

  changeMonth(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day: any) : void {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;
  }
}
