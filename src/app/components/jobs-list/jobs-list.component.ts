import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobsApiService } from 'src/app/services/jobs-api.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  jobsData:Job;
  jobs:Array<Job>=[];
  constructor(private jobs_service : JobsApiService ) { 
    this.jobsData={} as Job;
  }

  ngOnInit(): void {
    this.getAllJobs()
  }

  getAllJobs():void{
    this.jobs_service.getAllJobs().subscribe((response: any)=>{
      this.jobs=response;
    });
  }
  
}
