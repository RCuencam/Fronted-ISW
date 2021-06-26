import { Component, OnInit } from '@angular/core';
import {LoginRegisterService} from "../../services/login-register.service";
import {EmployeerService} from "../../services/employeer.service";
import {PostulantService} from "../../services/postulant.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {


  constructor(private usersApi: LoginRegisterService, private employeerApi: EmployeerService, private postulantApi: PostulantService, private router: Router) {

    this.userData = {} as User;
  }

  newpassword!: string
  passwordexist!: string
  emailexist!: string

  ingresante!: number;

  userData!: User;

  ngOnInit(): void {

  }

  getAllUsers(): void {
    this.usersApi.getAllUsers().subscribe((response: any) => {


      for (var i = 0; i < response.content.length; i++) {
        if (response.content[i].email == this.emailexist &&
          response.content[i].password == this.passwordexist)
        {

          this.userData = response.content[i];
        console.log(this.userData)
        console.log(this.newpassword)
        const newUser = {
          id: this.userData.id,
          firstname: this.userData.firstname,
          lastname: this.userData.lastname,
          email: this.userData.email
          ,
          number: this.userData.number,
          password: this.newpassword,
          document: this.userData.document
        };
        this.usersApi.updateUser(this.userData.id, newUser)
          .subscribe(response => {
            console.log(response);
          });
      }

        else{

          this.router.navigate(['/changepassword'])

        }
      }


    });
  }

}
