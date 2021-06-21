import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobsApiService } from 'src/app/services/jobs-api.service';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent implements OnInit {

  panelOpenState: boolean=false;
  events: string[] = [];
  opened: boolean=false;
  aea:string=""
  jobsData:Job;
  jobs:Array<Job>=[];

  toggle():void{
    this.opened=!this.opened;
  }
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
  filterByDistritMolina():void{
    this.jobs_service.getAllJobs().subscribe((response: any)=>{
      this.jobs=response;
      this.jobs=this.jobs.filter(item=>item.location.includes('Molina'))
    });
    
  }
  filterByDistritBorja():void{
    this.jobs_service.getAllJobs().subscribe((response: any)=>{
      this.jobs=response;
      this.jobs=this.jobs.filter(item=>item.location.includes('Borja'))
    });
    
  }
  filterByDistritSurco():void{
    this.jobs_service.getAllJobs().subscribe((response: any)=>{
      this.jobs=response;
      this.jobs=this.jobs.filter(item=>item.location.includes('Surco'))
    });
  }
  filterByDistritIsidro():void{
    this.jobs_service.getAllJobs().subscribe((response: any)=>{
      this.jobs=response;
      this.jobs=this.jobs.filter(item=>item.location.includes('Isidro'))
    });
  }

}
