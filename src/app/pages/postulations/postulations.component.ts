import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Job} from "../../models/job";
import {ActivatedRoute} from "@angular/router";
import {JobsApiService} from "../../services/jobs-api.service";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

/**
 * @title Stepper with customized states
 */

@Component({
  selector: 'app-postulations',
  templateUrl: './postulations.component.html',
  styleUrls: ['./postulations.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PostulationsComponent implements OnInit {


  smallScreen:boolean=false;
  jobId:number=0;
  jobInfo: Job;
  constructor(private route:ActivatedRoute, private jobs_service : JobsApiService, private breakpointObserver: BreakpointObserver) {
    this.route.params.subscribe(params=>this.jobId=params.jobofferId)
    this.jobInfo={} as Job;
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result =>{
      this.smallScreen=result.matches;
    });
  }

  ngOnInit(): void {
    this.getJobById()
  }

  getJobById():void{
    console.log(this.jobId);

    this.jobs_service.getJobById(this.jobId).subscribe((response: any)=>{
      this.jobInfo=response;
      console.log(response)
    });

  }



  }


