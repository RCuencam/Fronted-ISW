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
  jobInfo: Job;
  constructor(private route:ActivatedRoute, private jobs_service : JobsApiService) {
    this.route.params.subscribe(params=>this.jobId=params.id)
    this.jobInfo={} as Job;
   }

   ngOnInit(): void {
    this.getJobById()
  }

  getJobById():void{
    console.log(this.jobId);

    this.jobs_service.getJobById(this.jobId).subscribe((response: any)=>{
      this.jobInfo=response;
    });

  }
}
