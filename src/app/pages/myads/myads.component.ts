import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Job} from "../../models/job";
import {JobsApiService} from "../../services/jobs-api.service";

@Component({
  selector: 'app-myads',
  templateUrl: './myads.component.html',
  styleUrls: ['./myads.component.css']
})
export class MyadsComponent implements OnInit {
  panelOpenState: boolean=false;
  events: string[] = [];
  opened: boolean=false;

  constructor() {

  }

  ngOnInit(): void {

  }



}
