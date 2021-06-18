import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-postulation-step-two',
  templateUrl: './postulation-step-two.component.html',
  styleUrls: ['./postulation-step-two.component.css']
})
export class PostulationStepTwoComponent implements OnInit {

  constructor() { }

  @Input() regForm!: FormGroup;

  ngOnInit() {
  }

  step2Submitted() {
    this.regForm.get('contactDetails')!.get('email')!.markAsTouched();
    this.regForm.get('contactDetails')!.get('email')!.updateValueAndValidity();
  }

}
