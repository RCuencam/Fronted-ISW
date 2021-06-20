import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';


export interface Lenguaje {
  name: string;
}

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent  {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  lenguages: Lenguaje[] = [
    {name: 'Ingles'},
    {name: 'Alemán'},
    {name: 'Chino'},
  ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.lenguages.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(lenguages: Lenguaje): void {
    const index = this.lenguages.indexOf(lenguages);

    if (index >= 0) {
      this.lenguages.splice(index, 1);
    }
  }
}
