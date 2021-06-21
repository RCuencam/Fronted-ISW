import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  @Input() jobs=[] as any;
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.jobs);
    
  }

  
}
