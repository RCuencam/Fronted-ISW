import { Component, OnInit } from '@angular/core';
import {EmployeerService} from "../../services/employeer.service";
import {Employeer} from "../../models/employeer";

@Component({
  selector: 'app-employeerprueba',
  templateUrl: './employeerprueba.component.html',
  styleUrls: ['./employeerprueba.component.css']
})
export class EmployeerpruebaComponent implements OnInit {

  employeerId!: number
  employeerData: Employeer = {} as Employeer;
  constructor(private employeerApi: EmployeerService) { }

  ngOnInit(): void {
  }

  getEmployeerbyId(){
    this.employeerApi.getEmployeerbyId(this.employeerId).subscribe(data =>{
      console.log(data)
    })
  }


  addEmployeer(): void {

    const newEmployeer = {id: this.employeerData.id,firstname: this.employeerData.firstname, lastname: this.employeerData.lastname,
      email: this.employeerData.email, number: this.employeerData.number, password: this.employeerData.password,
      document: this.employeerData.document, posicion: this.employeerData.posicion};
    this.employeerApi.addStudent(newEmployeer)
      .subscribe(() => {
       console.log("me añadi correctamente")
      });
  }

}
