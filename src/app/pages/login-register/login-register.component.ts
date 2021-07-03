import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {LoginRegisterService} from "../../services/login-register.service";
import {Router} from "@angular/router";
import {EmployeerService} from "../../services/employeer.service";
import {PostulantService} from "../../services/postulant.service";
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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

  emailexist!:string
  passwordexist!:string
  postulanteOempleador=false
  validador=false
  ingresante!:number;
  fecha = new Date();
  employeer: {}
  postulant: {}
  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private usersApi: LoginRegisterService,private employeerApi: EmployeerService, private postulantApi: PostulantService, private router: Router) {
    this.employeer={}
    this.postulant={}
  }
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

      console.log('xd',response.content)

      for(var i=0;i<response.content.length;i++){
        if(response.content[i].email==this.emailexist &&
          response.content[i].password==this.passwordexist

          ){
            this.validador=true;
            this.ingresante= response.content[i].id;
          }

        }
        console.log(this.ingresante);

      if(this.validador){
        console.clear();
        this.employeerApi.getEmployeerbyId(this.ingresante).subscribe((responseEmployeer: any ) => {
          console.clear();
          this.employeer=responseEmployeer

          this.authService.login(responseEmployeer).subscribe(
            data => {
              console.log('confirm',data);

            },
            error => {
              console.clear();
              console.log('error',error.error.errorMessage);

            }
          );
          console.clear();
        this.router.navigate([`employeer/${this.ingresante}`])
            .then(() => console.clear());

        });

        this.postulantApi.getPostulantbyId(this.ingresante).subscribe((responsePostulant: any) => {
            console.clear();
               this.postulant=responsePostulant

          this.authService.login(responsePostulant).subscribe(
            data => {

              console.log('confirm',data);

            },
            error => {
              console.log('error',error.error.errorMessage);
              console.clear();
            }
          );
          this.router.navigate([`postulant/${this.ingresante}`])
            .then(() => console.clear());
        })

        console.clear();
      }
      else {
        alert("Contraseña incorrecta intentelo nuevamente")
      }
      console.clear();
    });
  }


  matcher = new MyErrorStateMatcher();

}
