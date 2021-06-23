import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {Employeer} from "../../models/employeer";
import {EmployeerService} from "../../services/employeer.service";

@Component({
  selector: 'app-modify-personal-information',
  templateUrl: './modify-personal-information.component.html',
  styleUrls: ['./modify-personal-information.component.css']
})
export class ModifyPersonalInformationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  employeerId!: number
  employeerData: Employeer = {} as Employeer;


  ngOnInit(): void {
  }
  constructor(private employeerApi: EmployeerService,private breakpointObserver: BreakpointObserver) {}

  getEmployeerbyId(){
    this.employeerApi.getEmployeerbyId(this.employeerId).subscribe(data =>{
      console.log(data)
    })
  }


  addEmployeer(): void {
    const newEmployeer = {firstname: this.employeerData.firstname, lastname: this.employeerData.lastname,
      email: this.employeerData.email, number: this.employeerData.number, password: this.employeerData.password,
      document: this.employeerData.document, posicion: this.employeerData.posicion};
    this.employeerApi.addStudent(newEmployeer)
      .subscribe(() => {
        console.log("me añadi correctamente")
      });
  }

}
