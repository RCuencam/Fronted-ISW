import { Component, OnInit } from '@angular/core';
import {EmployeerService} from "../../services/employeer.service";
import {Employeer} from "../../models/employeer";

@Component({
  selector: 'app-employeer-new',
  templateUrl: './employeer-new.component.html',
  styleUrls: ['./employeer-new.component.css']
})
export class EmployeerNewComponent implements OnInit {


  employeerData: Employeer = {} as Employeer;
  constructor(private employeerApiService: EmployeerService) { }

  ngOnInit(): void {
  }

  AddEmployeer(): void{
    const newEmployeer = {firstname: this.employeerData.firstname, lastname: this.employeerData.lastname, email: this.employeerData.email
      ,number: this.employeerData.number,password: this.employeerData.password,document: this.employeerData.document,civil_status: this.employeerData.posicion};
    this.employeerApiService.addEmployeer(newEmployeer).subscribe((response: any) => {
      console.log(response)
    });



  }

}
