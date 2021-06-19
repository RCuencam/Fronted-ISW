import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploudfiles',
  templateUrl: './uploudfiles.component.html',
  styleUrls: ['./uploudfiles.component.css']
})
export class UploudfilesComponent implements OnInit {

  apikey!: string;

  ngOnInit() {
    this.apikey = 'AZAreLJfiQy1jG9SUKwMQz';
  }

  onUploadSuccess(res: object) {
    console.log('###uploadSuccess', res);
  }

  onUploadError(err: any) {
    console.log('###uploadError', err);
  }

}
