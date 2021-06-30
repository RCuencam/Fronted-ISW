import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {Postulant} from "../../models/postulant";
import {ActivatedRoute, Router} from "@angular/router";
import {PostulantService} from "../../services/postulant.service";

@Component({
  selector: 'app-my-account-postulant',
  templateUrl: './my-account-postulant.component.html',
  styleUrls: ['./my-account-postulant.component.css']
})
export class MyAccountPostulantComponent {


  postulantData!: Postulant;
  postulantId!: number

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  ngOnInit(): void {

    this.getPostulantId();
  }
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private route: ActivatedRoute,private postulantApiService: PostulantService) {
  }

  getPostulantId(): void{
    this.postulantId = Number(this.route.params.subscribe(params => {
      this.postulantApiService.getPostulantById(params.postulantId).subscribe((response: any)=> {
        this.postulantId = params.postulantId;
        this.postulantData=response
      });
    }));

  }

}

