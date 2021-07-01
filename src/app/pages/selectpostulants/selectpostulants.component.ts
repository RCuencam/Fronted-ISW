import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Postulantjobs} from "../../models/postulantjobs";
import {PostulantjobsService} from "../../services/postulantjobs.service";
import {Job} from "../../models/job";
import {JobsApiService} from "../../services/jobs-api.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-selectpostulants',
  templateUrl: './selectpostulants.component.html',
  styleUrls: ['./selectpostulants.component.css']
})
export class SelectpostulantsComponent implements OnInit {

  postulantjobs:Array<Postulantjobs>=[];

  jobOfferId!: number;
  jobofferData!: Job
   postulantJobsData!: Postulantjobs
  postulantaccept: Array<Boolean>=[];

  protected _panelOpenState: boolean;

  constructor(private postulantjobs_service: PostulantjobsService, private jobOffer_service: JobsApiService,
              private router: Router,
              private route: ActivatedRoute) {
    this.postulantJobsData = {} as Postulantjobs;
    this.jobofferData={}as Job
    this._panelOpenState = false;

  }

  ngOnInit(): void {
    this.getallPostulantJobsByJobOfferId();
    this.getJobOfferbyId();

  }

  getallPostulantJobsByJobOfferId() {
    this.jobOfferId = Number(this.route.params.subscribe((paramsJobOffer => {
      this.postulantjobs_service.getAllPostulantJobsByJobOfferId(paramsJobOffer.jobofferId)
        .subscribe((response: any) => {
          this.postulantjobs = response.content;

        });
    })));
  }

  getJobOfferbyId() {
    this.jobOfferId = Number(this.route.params.subscribe((paramsJobOffer => {
      this.jobOffer_service.getJobById(paramsJobOffer.jobofferId)
        .subscribe((response: any) => {
          this.jobofferData = response;
          console.log(response);
        });
    })));
  }
}
