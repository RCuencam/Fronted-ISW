import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {LoginRegisterService} from "../../services/login-register.service";
import {Router} from "@angular/router";
import {EmployeerService} from "../../services/employeer.service";
import {PostulantService} from "../../services/postulant.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

    constructor(private usersApi: LoginRegisterService,private employeerApi: EmployeerService, private postulantApi: PostulantService, private router: Router) { }
  emailexist!:string
  passwordexist!:string
  postulanteOempleador=false
  validador=false
  ingresante!:number;
  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,

  ]);

  getAllUsers(): void {
    this.usersApi.getAllUsers().subscribe((response: any) => {

      console.log(response.content)

      for(var i=0;i<response.content.length;i++){
        if(response.content[i].email==this.emailexist &&
          response.content[i].password==this.passwordexist

        ){
         this.validador=true;
          this.ingresante= response.content[i].id;
        }

      }

      if(this.validador){

        this.employeerApi.getEmployeerbyId(this.ingresante).subscribe((responseEmployeer: any) => {
          this.router.navigate([`/jobs`])
            .then(() => console.log('Ingrese'));
        });

        this.postulantApi.getPostulantbyId(this.ingresante).subscribe((responseEmployeer: any) => {
          this.router.navigate([`/contrat`])
            .then(() => console.log('Ingrese'));
        });


      }
      else {
        alert("Contraseña incorrecta intentelo nuevamente")
      }

    });
  }

  matcher = new MyErrorStateMatcher();

}
