import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";
import {Postulant} from "../../models/postulant";
import {PostulantService} from "../../services/postulant.service";
import {PostulantjobsService} from "../../services/postulantjobs.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-postulation-step-tree',
  templateUrl: './postulation-step-tree.component.html',
  styleUrls: ['./postulation-step-tree.component.css']
})
export class PostulationStepTreeComponent implements OnInit {

  postulantId!: number
  jobooferId!: number
  postulantData: Postulant = {} as Postulant;
  constructor(private postulantjobsApiService: PostulantjobsService,private route:ActivatedRoute) {

    this.route.params.subscribe(params=>this.postulantId=params.postulantId)
    this.route.params.subscribe(params=>this.jobooferId=params.jobofferId)
  }



  @Input() regForm!: FormGroup;
  formSubmitted: boolean = false;

  ngOnInit() {
  }

  submit() {
    console.log('submitted');
    console.log(this.regForm.value);
    this.formSubmitted = true;

  }

  AddPostulantjobs(): void{
    const newPostulantJobs = {accept: false};
    this.postulantjobsApiService.addPostulantJobs(this.postulantId,this.jobooferId,newPostulantJobs).subscribe((response: any) => {
      console.log(response)
    });
  }

}


