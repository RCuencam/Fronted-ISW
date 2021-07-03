import { Component, OnInit } from '@angular/core';
import {Employeer} from "../../models/employeer";
import {ModifyCompanyProfileApiService} from "../../services/modify-company-profile-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Company} from "../../models/company";
import {MatDialog} from "@angular/material/dialog";
import {DialogContratComponent} from "../dialog-changes-saved-successfully/dialog-contrat.component";

@Component({
  selector: 'app-modify-company-profile',
  templateUrl: './modify-company-profile.component.html',
  styleUrls: ['./modify-company-profile.component.css']
})
export class ModifyCompanyProfileComponent implements OnInit {
  companyData: Company;

  employeerId!: number;


  constructor(private companiesApi: ModifyCompanyProfileApiService,
              private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
    this.companyData = {} as Company;
  }
  newname!: string;
  newdescription!: string;
  newlogo!: string;
  newruc!: number;
  newdireccion!: string;

  ngOnInit(): void {
    this.getAllCompanies();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContratComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.router.navigate(['/employeer/', this.employeerId, 'myaccount']);
    })
  }

  getAllCompanies():void{
    this.employeerId = Number(this.route.params.subscribe(params => {
      this.companiesApi.getCompaniesByEmployeerId(params.employeerId)
        .subscribe((response: any) => {
          this.employeerId = params.employeerId;
          this.companyData = response.content[0];
          console.log(this.companyData);
        })
    }))
  }

  updateCompany(): void {
    const newCompany = {
      id: this.companyData.id,
      name: this.newname,
      description: this.newdescription,
      logo: this.newlogo,
      ruc: this.newruc,
      direccion: this.newdireccion,
      idEmployeer: this.companyData.idEmployeer,
      firstnameEmployeer: this.companyData.firstnameEmployeer,
      lastnameEmployeer: this.companyData.lastnameEmployeer,
      emailEmployeer: this.companyData.emailEmployeer,
      numberEmployeer: this.companyData.numberEmployeer,
      passwordEmployeer: this.companyData.passwordEmployeer,
      documentEmployeer: this.companyData.documentEmployeer,
      idSector: this.companyData.idSector,
      nameSector: this.companyData.nameSector,
      descriptionSector: this.companyData.descriptionSector
    };

    this.companiesApi.updateCompany(this.employeerId, this.companyData.idSector, newCompany)
      .subscribe(response => {
        console.log(response);
      });
  }

}
