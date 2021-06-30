import { Component, OnInit } from '@angular/core';
import {Interview} from "../../models/interview";
import {InterviewApiService} from "../../services/interview-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Postulantjobs} from "../../models/postulantjobs";
import {PostulantjobsService} from "../../services/postulantjobs.service";

@Component({
  selector: 'app-selectpostulants',
  templateUrl: './selectpostulants.component.html',
  styleUrls: ['./selectpostulants.component.css']
})
export class SelectpostulantsComponent implements OnInit {
  get panelOpenState(): boolean {
    return this._panelOpenState;
  }
  set panelOpenState(value: boolean) {
    this._panelOpenState = value;
  }

//Variables que se necesita para el get
  jobOfferId!: number;
  postulantjobsData!: Postulantjobs;
  postulantjobsId!: number

  //Inyeccion
  protected _panelOpenState: boolean;
  constructor(private postulantjobs_service : PostulantjobsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.postulantjobsData = {} as Postulantjobs;
    this._panelOpenState=false;
  }

  ngOnInit(): void {
    this.getallPostulantJobsByJobOfferId();
  }

  getallPostulantJobsByJobOfferId(){
      this.jobOfferId = Number(this.route.params.subscribe((paramsJobOffer => {
        this.postulantjobs_service.getAllPostulantJobsByJobOfferId(paramsJobOffer.jobofferId)
          .subscribe((response: any) => {
            this.postulantjobsData = response.content;
            console.log(response);
          });
      })));
  }

}
