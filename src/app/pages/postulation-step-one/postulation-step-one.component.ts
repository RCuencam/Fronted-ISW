import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-postulation-step-one',
  templateUrl: './postulation-step-one.component.html',
  styleUrls: ['./postulation-step-one.component.css']
})
export class PostulationStepOneComponent implements OnInit {

  constructor() { }

  @Input() regForm!: FormGroup;

  ngOnInit() {
  }

  step1Submitted() {
    this.regForm.markAsTouched();

  }

}
