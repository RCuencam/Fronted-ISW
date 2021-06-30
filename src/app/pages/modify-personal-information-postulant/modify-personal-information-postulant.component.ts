import { Component, OnInit } from '@angular/core';
import {ModifyPersonalInformationPostulantApiService} from "../../services/modify-personal-information-postulant-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Postulant} from "../../models/postulant";
import {User} from "../../models/user";

@Component({
  selector: 'app-modify-personal-information-postulant',
  templateUrl: './modify-personal-information-postulant.component.html',
  styleUrls: ['./modify-personal-information-postulant.component.css']
})
export class ModifyPersonalInformationPostulantComponent implements OnInit {
  userData: User;

  constructor(private usersApi: ModifyPersonalInformationPostulantApiService,
              private router: Router,
              private route: ActivatedRoute) {
    this.userData = {} as User;
  }

  newname!: string
  newlastname!: string
  newdocument!: number
  newnumber!: number
  newemail!: string
  postulantId!: number;

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.postulantId = Number(this.route.params.subscribe(params => {
      this.usersApi.getUsersById(params.postulantId).subscribe((response: any) => {
        this.postulantId = params.postulantId;
        this.userData = response;
        console.log(this.userData);
        const newUser = {
          id: this.userData.id,
          firstname: this.newname,
          lastname: this.newlastname,
          email: this.newemail,
          number: this.newnumber,
          password: this.userData.password,
          document: this.newdocument
        };

        this.usersApi.updateUser(this.userData.id, newUser)
          .subscribe(response => {
            console.log(response);

            this.router.navigate(['/postulant/',this.postulantId,'myaccount']);
          });
      });
    }))

  }
}
