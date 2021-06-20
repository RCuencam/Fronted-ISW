import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Job} from "../../models/job";
import {JobsApiService} from "../../services/jobs-api.service";
import {Postulant} from "../../models/postulant";
import {PostulantsApiService} from "../../services/postulants-api.service";

import {PostulantApproved} from "../../models/postulant-approved";
import {PostulantApprovedApiService} from "../../services/postulant-approved-api.service";

@Component({
  selector: 'app-approved-postulant',
  templateUrl: './approved-postulant.component.html',
  styleUrls: ['./approved-postulant.component.css']
})
export class ApprovedPostulantComponent implements OnInit {
  jobId:number = 0;
  jobInfo: Job;

  postulantApprovedId:number = 0;
  postulantApprovedInfo: PostulantApproved;

  constructor(private route: ActivatedRoute,
              private job_service: JobsApiService,
              private postulantApproved_service: PostulantApprovedApiService) {
    this.route.params.subscribe(params=>this.jobId=params.id);
    this.route.params.subscribe(params=>this.postulantApprovedId=params.id);
    this.jobInfo={} as Job;
    this.postulantApprovedInfo={} as PostulantApproved;
  }

  ngOnInit(): void {
    this.getJobById();
    this.getPostulantApprovedById();
  }

  getPostulantApprovedById():void{
    console.log(this.postulantApprovedId);

    this.postulantApproved_service.getPostulantApprovedById(this.postulantApprovedId).subscribe((response: any) => {
      this.postulantApprovedInfo = response;
    });
  }

  getJobById(): void{
    console.log(this.jobId);

    this.job_service.getJobById(this.jobId).subscribe((response: any) => {
      this.jobInfo = response;
    });
  }


}
