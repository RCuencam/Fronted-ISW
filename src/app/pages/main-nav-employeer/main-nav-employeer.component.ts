import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeerService} from "../../services/employeer.service";
import {Employeer} from "../../models/employeer";

@Component({
  selector: 'app-main-nav-employeer',
  templateUrl: './main-nav-employeer.component.html',
  styleUrls: ['./main-nav-employeer.component.css']
})
export class MainNavEmployeerComponent implements OnInit{

  employeerData!: Employeer;
  employeerId!: number
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  ngOnInit(): void {
    this.getEmployeerId();
  }
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private route: ActivatedRoute,private employeerApiService: EmployeerService) {
  }

  getEmployeerId(): void {
    this.employeerId = Number(this.route.params.subscribe(params => {
    this.employeerApiService.getEmployeerbyId(params.postulantId).subscribe((response: any)=> {
      this.employeerData=response
      console.log(this.employeerData);
      });
    }));

  }
}
