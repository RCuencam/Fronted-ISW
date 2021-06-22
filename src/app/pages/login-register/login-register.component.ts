import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {LoginRegisterService} from "../../services/login-register.service";

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

    constructor(private usersApi: LoginRegisterService) { }
  emailexist!:string
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

      console.log(response.content[0])
      for(var i=0;i<response.content.length;i++){
        if(response.content[i].email==this.emailexist){
          console.log("coincidencia")
        }
      }
    });
  }

  matcher = new MyErrorStateMatcher();

}
