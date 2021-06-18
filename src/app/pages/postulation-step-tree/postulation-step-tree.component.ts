import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-postulation-step-tree',
  templateUrl: './postulation-step-tree.component.html',
  styleUrls: ['./postulation-step-tree.component.css']
})
export class PostulationStepTreeComponent implements OnInit {

  constructor() {
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
}
