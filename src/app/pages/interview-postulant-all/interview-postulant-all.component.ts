import {Component, OnInit} from '@angular/core';
import {InterviewApiService} from "../../services/interview-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Interview} from "../../models/interview";
import * as moment from 'moment'

@Component({
  selector: 'app-interview-postulant-all',
  templateUrl: './interview-postulant-all.component.html',
  styleUrls: ['./interview-postulant-all.component.css']
})
export class InterviewPostulantAllComponent implements OnInit {
  interviewInfo: Interview;

  postulantId!: number

  fecha = new Date();

  interviewData: Array<Interview> = [];

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

  constructor(private interview_service : InterviewApiService,
              private router: Router,
              private route: ActivatedRoute) {
    this.interviewInfo = {} as Interview;
  }

  ngOnInit(): void {
    this.getInterviewByPostulantId();
    this.getDaysFromDate(6, 2021)
  }

  getInterviewByPostulantId(): void{
    this.postulantId = Number(this.route.params.subscribe(paramsPostulant => {
      this.interview_service.getInterviewByPostulantId(paramsPostulant.postulantId)
        .subscribe((response : any) => {
          this.postulantId = paramsPostulant.postulantId;
          this.interviewData = response.content;
        })
      }
    ))
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

  changeMonth(flag: number) : void{
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day: any): void {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;
  }
}
