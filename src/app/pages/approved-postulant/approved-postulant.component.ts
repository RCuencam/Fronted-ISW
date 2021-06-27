import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostulantApproved} from "../../models/postulant-approved";
import {PostulantApprovedApiService} from "../../services/postulant-approved-api.service";

@Component({
  selector: 'app-approved-postulant',
  templateUrl: './approved-postulant.component.html',
  styleUrls: ['./approved-postulant.component.css']
})
export class ApprovedPostulantComponent implements OnInit {
  postulantId!: number;
  jobOfferId!: number

  postulantApprovedId!: number
  postulantApprovedInfo: PostulantApproved;

  constructor(private postulantApproved_service: PostulantApprovedApiService,
              private router: Router,
              private route: ActivatedRoute) {
    this.postulantApprovedInfo={} as PostulantApproved;
  }

  ngOnInit(): void {
    this.getPostulantApprovedById();
  }

  getPostulantApprovedById(){
    this.postulantId = Number(this.route.params.subscribe(paramsPostulant => {
      this.jobOfferId = Number(this.route.params.subscribe((paramsJobOffer => {
        this.postulantApproved_service.getPostulantApprovedByPostulantIdAndJobOfferId(paramsPostulant.postulantId, paramsJobOffer.jobOfferId)
          .subscribe((response: any) => {
            this.postulantApprovedInfo = response
            console.log(response)
          })
      })))
    }))
  }
}
