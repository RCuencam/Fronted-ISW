import { Component, OnInit } from '@angular/core';
import {Profile} from "../../models/Profile";
import {ModifyProfessionalProfileApiService} from "../../services/modify-professional-profile-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Postulant} from "../../models/postulant";
import {DialogContratComponent} from "../dialog-changes-saved-successfully/dialog-contrat.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-modify-professional-profile',
  templateUrl: './modify-professional-profile.component.html',
  styleUrls: ['./modify-professional-profile.component.css']
})
export class ModifyProfessionalProfileComponent implements OnInit {
  profileData: Profile;
  postulantData: Postulant;
  constructor(private profilesApi: ModifyProfessionalProfileApiService,
              private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
    this.profileData = {} as Profile;
    this.postulantData = {} as Postulant;
  }

  newocupation!: string;
  newvideo!: string;
  newdescription!:string;
  postulantId!: number;
  profileId!: number;

  ngOnInit(): void {
    this.getAllProfiles();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContratComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.router.navigate(['/postulant/', this.postulantId, 'myaccount']);
    })
  }
  getAllProfiles(): void{
    this.postulantId = Number(this.route.params.subscribe(params => {
      this.profilesApi.getProfilesById(params.postulantId).subscribe((response: any) => {
        this.postulantId = params.postulantId;
        this.profileData = response.content[0];
        console.log(this.profileData);
      });
    }))
  }

  updateProfile(): void{
    const newProfile = {
      id: this.profileData.id,
      ocupation: this.newocupation,
      description: this.newdescription,
      video: this.newvideo
    };

    this.profilesApi.updateProfile(this.postulantId, this.profileData.id, newProfile)
      .subscribe(response => {
        console.log(response);
        this.openDialog();
      });

  }

}
