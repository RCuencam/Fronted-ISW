import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent implements OnInit {

  events: string[] = [];
  opened: boolean=false;
  toggle():void{
    this.opened=!this.opened;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
