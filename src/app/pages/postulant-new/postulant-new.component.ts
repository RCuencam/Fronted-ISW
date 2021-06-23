import { Component, OnInit } from '@angular/core';
import {PostulantService} from "../../services/postulant.service";
import {Postulant} from "../../models/postulant";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-postulant-new',
  templateUrl: './postulant-new.component.html',
  styleUrls: ['./postulant-new.component.css']
})
export class PostulantNewComponent implements OnInit {

  postulantForm!: NgForm;
  postulantData: Postulant = {} as Postulant;
  constructor(private postulantApiService: PostulantService) { }

  ngOnInit(): void {
  }

  AddPostulant(): void{
    const newPostulant = {firstname: this.postulantData.firstname, lastname: this.postulantData.lastname, email: this.postulantData.email
    ,number: this.postulantData.number,password: this.postulantData.password,document: this.postulantData.document,civil_status: this.postulantData.civil_status};
   this.postulantApiService.addPostulants(newPostulant).subscribe((response: any) => {
      console.log(response)
   });



  }





}



