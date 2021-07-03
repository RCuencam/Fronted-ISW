import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobsApiService } from 'src/app/services/jobs-api.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  @Input() jobs=[] as any;
  postulantId!:string
  jobsData:Job
  texta=''
  constructor(private jobs_service : JobsApiService,private route:ActivatedRoute ) {
    this.jobsData={} as Job;
    this.route.params.subscribe(params=>this.postulantId=params.postulantId)
  }
  
  ngOnInit(): void {
    console.log(this.jobs);
    
  }

  getAllJobs():void{
    this.jobs_service.getAllJobs().subscribe((response: any)=>{
      this.jobs=response.content;
      
    });
  }

  searchJob(){
    console.log(this.texta);
    if(this.texta)
    this.jobs=this.jobs.filter((item : any)=>{
      if(item.title.includes(this.texta)){
        return item
      }
    })
  
  }
  

}
