import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  events: string[] = [];
  opened: boolean=false;
  toggle():void{
    this.opened=!this.opened;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
