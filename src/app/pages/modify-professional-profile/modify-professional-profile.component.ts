import { Component, OnInit } from '@angular/core';
import {ModifyProfessionalProfileApiService} from "../../services/modify-professional-profile-api.service";
import {ModifyProfessionalProfile} from "../../models/modify-professional-profile";
import {ActivatedRoute, Router} from "@angular/router";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Languages} from "../../models/languages";
import {LanguagesApiService} from "../../services/languages-api.service";

export interface Language{
  name:string;
}
@Component({
  selector: 'app-modify-professional-profile',
  templateUrl: './modify-professional-profile.component.html',
  styleUrls: ['./modify-professional-profile.component.css']
})
export class ModifyProfessionalProfileComponent  {
  ProfessionalProfileId:number = 0;
  ProfessionalProfileInfo: ModifyProfessionalProfile
  languagesId:number = 0;
  languagesInfo: Languages;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  selectable=true;
  removable=true;
  addOnBlur = true;

  languages: Language[] = [
    {name: 'Inglés'},
    {name: 'Alemán'},
    {name: 'Chino'},
  ];

  constructor(private router: Router,
              private route:ActivatedRoute,
              private profile_services: ModifyProfessionalProfileApiService,
              private language_services: LanguagesApiService) {
    this.route.params.subscribe(params=>this.ProfessionalProfileId=params.id);
    this.route.params.subscribe(params=>this.languagesId=params.id);
    this.ProfessionalProfileInfo={} as ModifyProfessionalProfile;
    this.languagesInfo={} as Languages;
  }

  ngOnInit():void{
    this.getProfessionalProfileById();
    this.getLanguageById();
  }
  getProfessionalProfileById():void{
    console.log(this.ProfessionalProfileId);
    this.profile_services.getProfessionalProfileById(this.ProfessionalProfileId).subscribe((response:any) =>{
      this.ProfessionalProfileInfo = response;
    });
  }
  navigateToLanguage(): void {
    this.router.navigate(['/languages'])
      .then(() => console.log(this.route.url) );
  }
  getLanguageById():void{
    console.log(this.languagesId);
    this.language_services.getLanguagesById(this.languagesId).subscribe((response:any) =>{
      this.languagesInfo = response;
    });
  }

  addLanguage(): void {
    const newLanguage = {name: this.languagesInfo.name, level: this.languagesInfo.level};
    this.language_services.addLanguage(newLanguage)
      .subscribe(()=> {
        this.navigateToLanguage();
      });
  }

  updateLanguage(): void{
    this.language_services.updateLanguage(this.languagesInfo.id, this.languagesInfo as Languages)
      .subscribe( response => {
        console.log(response);
      });
    this.navigateToLanguage();
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.languages.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(languages: Language): void {
    const index = this.languages.indexOf(languages);

    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }

}
