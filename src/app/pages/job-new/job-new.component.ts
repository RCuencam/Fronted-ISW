import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Job} from "../../models/job";
import {JobNewApiService} from "../../services/job-new-api.service";
import {Router} from "@angular/router";
import {Prueba} from "../../models/prueba";

@Component({
  selector: 'app-job-new',
  templateUrl: './job-new.component.html',
  styleUrls: ['./job-new.component.css']
})
export class JobNewComponent implements OnInit, AfterViewInit {

  @ViewChild('jobForm', {static: false}) jobForm!: NgForm;
  jobData: Job;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'location', 'title', ' type', 'date', 'url', 'details', 'requirements', 'benefits'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isEditMode = false;
  isFiltering = false;

  constructor(private jobApi: JobNewApiService,
              private router: Router) {
    this.jobData = {} as Job;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cancelEdit(): void {
    this.isEditMode = false;
    this.jobForm.resetForm();
  }

  addJob(): void {
    const newJob = {title : this.jobData.title, location : this.jobData.location, type : this.jobData.type, date : this.jobData.date, url : this.jobData.url, details : this.jobData.details};
    this.jobApi.addJob(newJob).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
  }

  updatePrueba(): void {
    this.jobApi.updateJob(this.jobData.id, this.jobData)
      .subscribe((response: Job) => {
        this.dataSource.data = this.dataSource.data.map((o: any) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });
        this.cancelEdit();
      })
  }

  onSubmit(): void{
    if (this.jobForm.form.valid){
      if(this.isEditMode){
        this.updatePrueba();
      }else {
        this.addJob();
      }
    }else {
      console.log('Invalid Data');
    }
  }

}
