import { Component, OnInit } from '@angular/core';
import {PostulantjobsService} from "../../services/postulantjobs.service";
import {JobsApiService} from "../../services/jobs-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Postulantjobs} from "../../models/postulantjobs";
import {ProfilePostulant} from "../../models/profile-postulant";
import {ProfilepostulantService} from "../../services/profilepostulant.service";
import {PostulantService} from "../../services/postulant.service";
import {Postulant} from "../../models/postulant";
import {Job} from "../../models/job";

@Component({
  selector: 'app-selectpostulants-moreinfo',
  templateUrl: './selectpostulants-moreinfo.component.html',
  styleUrls: ['./selectpostulants-moreinfo.component.css']
})
export class SelectpostulantsMoreinfoComponent implements OnInit {

  postulantId!:number
  jobooferId!: number
  profilePostulants:Array<ProfilePostulant>=[];
  postulantData!: Postulant;
  constructor(private profilePostulant_service: ProfilepostulantService, private jobOffer_service: JobsApiService,private postulant_service: PostulantService,
              private postulantjobs:PostulantjobsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.postulantData={}as Postulant
  }



  ngOnInit(): void {
    this.route.params.subscribe(params=>this.postulantId=params.postulantjobsId);
   this.getProfilebyPostulantId()
    this.getPostulantById()
console.log(this.postulantId)
  }


  getProfilebyPostulantId() {

      this.profilePostulant_service.getProfileByPostulantId(this.postulantId)
        .subscribe((response: any) => {
          this.profilePostulants = response.content;
          console.log('oa',response.content);
        });

  }

  getPostulantById() {

    this.postulant_service.getPostulantById(this.postulantId)
      .subscribe((response: any) => {
        this.postulantData = response
        console.log('123', this.postulantData);
      });

  }



}
