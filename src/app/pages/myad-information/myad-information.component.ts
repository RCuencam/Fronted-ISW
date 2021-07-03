import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobsApiService } from 'src/app/services/jobs-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-myad-information',
  templateUrl: './myad-information.component.html',
  styleUrls: ['./myad-information.component.css']
})
export class MyadInformationComponent implements OnInit {
  jobId : number=0;
  employeerId : number=0;
  jobInfo : Job;
  jobUpdated: Job;
  modify:boolean=true;

  updateJob : Object={
    direction:'',
    title:'',
    type:'',
    description:''
  }
  direction: string='';
  title: string='';
  type: string='';
  description: string='';
  final_date_offer: string='';
  constructor(private location: Location,private route:ActivatedRoute, private jobs_service : JobsApiService) {
    this.route.params.subscribe(params=>this.jobId=params.jobofferId)
    this.route.params.subscribe(params=>this.employeerId=params.employeerId)
    this.jobInfo={} as Job;
    this.jobUpdated={} as Job;
   }

  ngOnInit(): void {
    this.getJobByEmployeerId()
  }

  getJobByEmployeerId() : void{
    this.jobs_service.getJobByEmployeerId(this.jobId,this.employeerId).subscribe((response : any)=>{
      this.jobInfo=response;
      this.final_date_offer=this.jobInfo.final_date_offer;
      console.log(this.jobInfo);
      
    })
  }
  goBack() : void{    
    this.location.back();
  }
  handleModify() : void{
    this.modify=false
  }
  editJob() : void{
    this.jobUpdated={
      id:this.jobInfo.id,
      description:this.description,
      begin_date_offer:'',
      final_date_offer:this.final_date_offer,
      salary:this.jobInfo.salary,
      direction:this.direction,
      type:this.type,
      title:this.title
    }
    this.jobs_service.updateJobByEmployeerId(this.jobId,this.employeerId,this.jobUpdated).subscribe((response: any) => {
      console.log(response)
     });
     this.location.back()
    
  }
}
