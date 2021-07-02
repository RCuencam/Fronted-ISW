import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Job} from "../../models/job";
import {PostulantjobsService} from "../../services/postulantjobs.service";
import {Postulantjobs} from "../../models/postulantjobs";
@Component({
  selector: 'app-mypostulations',
  templateUrl: './mypostulations.component.html',
  styleUrls: ['./mypostulations.component.css']
})
export class MypostulationsComponent implements OnInit {

  panelOpenState: boolean=false;
  events: string[] = [];
  opened: boolean=false;
  jobsData:Job;
  jobs:Array<Postulantjobs>=[];
  postulantId:number=0;

  constructor(private route:ActivatedRoute, private postulantjobs_service : PostulantjobsService) {
    this.jobsData={} as Job;


  }

  ngOnInit(): void {
    this.getAllJobsAByEmployeerId()
    console.log(this.postulantId);
    this.route.params.subscribe(params=>this.postulantId=params.postulantId)
  }

  getAllJobsAByEmployeerId() : void{
    this.postulantjobs_service.getAllPostulantJobsByPostulantId(this.postulantId).subscribe((response: any)=>{
      this.jobs=response.content;
      console.log(this.jobs);
    })
  }
}
