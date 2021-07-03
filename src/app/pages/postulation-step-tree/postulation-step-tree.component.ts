import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";
import {Postulant} from "../../models/postulant";
import {PostulantService} from "../../services/postulant.service";
import {PostulantjobsService} from "../../services/postulantjobs.service";
import {ActivatedRoute, Router} from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { DialogPostulationSendSuccessfullyComponent } from '../dialog-postulation-send-successfully/dialog-postulation-send-successfully.component';

@Component({
  selector: 'app-postulation-step-tree',
  templateUrl: './postulation-step-tree.component.html',
  styleUrls: ['./postulation-step-tree.component.css']
})
export class PostulationStepTreeComponent implements OnInit {

  postulantId!: number
  jobooferId!: number
  postulantData: Postulant = {} as Postulant;
  constructor(private postulantjobsApiService: PostulantjobsService,private route:ActivatedRoute, private router: Router, public dialog: MatDialog) {

    this.route.params.subscribe(params=>this.postulantId=params.postulantId)
    this.route.params.subscribe(params=>this.jobooferId=params.jobofferId)
  }



  @Input() regForm!: FormGroup;
  formSubmitted: boolean = false;

  ngOnInit() {
  }

  submit() {
    console.log('submitted');
    console.log(this.regForm.value);
    this.formSubmitted = true;

  }

  AddPostulantjobs(): void{
    const newPostulantJobs = {accept: false};
    this.openDialog();
    this.postulantjobsApiService.addPostulantJobs(this.postulantId,this.jobooferId,newPostulantJobs).subscribe((response: any) => {
      console.log(response)
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPostulationSendSuccessfullyComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.router.navigate(['/postulant/',this.postulantId]);
    })
  }

}


