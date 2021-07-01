import { Component, OnInit } from '@angular/core';
import {PostulantjobsService} from "../../services/postulantjobs.service";
import {JobsApiService} from "../../services/jobs-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Postulantjobs} from "../../models/postulantjobs";
import {ProfilePostulant} from "../../models/profile-postulant";
import {ProfilepostulantService} from "../../services/profilepostulant.service";

@Component({
  selector: 'app-selectpostulants-moreinfo',
  templateUrl: './selectpostulants-moreinfo.component.html',
  styleUrls: ['./selectpostulants-moreinfo.component.css']
})
export class SelectpostulantsMoreinfoComponent implements OnInit {

  postulantId!:number
  jobooferId!: number
  profilePostulants:Array<ProfilePostulant>=[];
  constructor(private profilePostulant_service: ProfilepostulantService, private jobOffer_service: JobsApiService,
              private router: Router,
              private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.params.subscribe(params=>this.postulantId=params.postulantjobsId);
   this.getProfilebyPostulantId()
console.log(this.postulantId)
  }


  getProfilebyPostulantId() {

      this.profilePostulant_service.getProfileByPostulantId(this.postulantId)
        .subscribe((response: any) => {
          this.profilePostulants = response.content;
          console.log(response);
        });

  }

}
