import { Component, OnInit } from '@angular/core';
import {Upload} from "../../models/upload";
import { FilesApiService } from '../../services/files-api.service';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-uploudfiles',
  templateUrl: './uploudfiles.component.html',
  styleUrls: ['./uploudfiles.component.css']
})
export class UploudfilesComponent implements OnInit {


  uploadData: Upload;
  information: object = [];
  dataSource = new MatTableDataSource();
  constructor(private uploadApi: FilesApiService,  ) {
    this.uploadData = {} as Upload;

  }


  apikey!: string;

  ngOnInit() {
    this.apikey = 'AZAreLJfiQy1jG9SUKwMQz';
  }

  onUploadSuccess(res: object) {
    console.log('###uploadSuccess', res);
    this.information=res;

  }


  onUploadError(err: any) {
    console.log('###uploadError', err);
  }





}
