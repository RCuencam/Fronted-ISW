import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobsApiService } from 'src/app/services/jobs-api.service';

@Component({
  selector: 'app-job-information',
  templateUrl: './job-information.component.html',
  styleUrls: ['./job-information.component.css']
})
export class JobInformationComponent implements OnInit {
  jobId:number=0;
  postulantId!: number
  jobInfo: Job;
  constructor(private route:ActivatedRoute, private jobs_service : JobsApiService) {
    this.route.params.subscribe(params=>this.jobId=params.jobofferId)
    this.route.params.subscribe(params=>this.postulantId=params.postulantId)
    this.jobInfo={} as Job;
   }

   ngOnInit(): void {
    this.getJobById()
     console.log('postulant',this.postulantId)
  }

  getJobById():void{
    console.log('job',this.jobId);
    this.route.params.subscribe(params=>{console.log(params);
    })
    

    this.jobs_service.getJobById(this.jobId).subscribe((response: any)=>{
      this.jobInfo=response;
      console.log(this.jobInfo);
      
    });

  }
}
