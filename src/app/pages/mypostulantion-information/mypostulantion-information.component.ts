import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostulantjobsService} from "../../services/postulantjobs.service";
import {Postulantjobs} from "../../models/postulantjobs";

@Component({
  selector: 'app-mypostulantion-information',
  templateUrl: './mypostulantion-information.component.html',
  styleUrls: ['./mypostulantion-information.component.css']
})
export class MypostulantionInformationComponent implements OnInit {

  jobInfo:Postulantjobs;
  jobId:number=0;
  postulantId: number=0;
  constructor(private route:ActivatedRoute,private postulantjobs_service : PostulantjobsService) {
    this.jobInfo={} as Postulantjobs;
    this.route.params.subscribe(params=>{ 
      this.jobId=params.jobId;
      this.postulantId=params.postulantId;
    })

  }

  ngOnInit(): void {
    this.getJobAByJobId()
  }

  getJobAByJobId() : void{
  
    this.postulantjobs_service.getPostulantJobByOfferId(this.jobId).subscribe((response: any)=>{
      this.jobInfo=response;
      console.log(this.jobInfo);
    })
  }

  deletePostulantJob() : void{
    this.postulantjobs_service.deletePostulantJob(this.postulantId,this.jobInfo.idJobOffer).subscribe((response: any)=>{
      console.log(response);
      
    })
  }

}
