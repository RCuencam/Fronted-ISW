import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import  * as _ from 'lodash';
import {PostulantsApiService} from "../../services/postulants-api.service";
import {Postulant} from "../../models/postulant";
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {Router} from "@angular/router";


@Component({
  selector: 'app-postulants',
  templateUrl: './postulants.component.html',
  styleUrls: ['./postulants.component.css']
})
export class PostulantsComponent implements OnInit, AfterViewInit {
  postulantData: Postulant;
  dataSource = new MatTableDataSource();
  displayedColumns:string[] = ['id','firstname','lastaname','actions'];

  @ViewChild('postulantForm', {static: false}) postulantForm!: NgForm;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isEditMode= false;
  isFiltering=false;
  constructor(private postulantsApi: PostulantsApiService, private router: Router) {

    this.postulantData = {} as Postulant;
  }



//recuperar la información
  ngOnInit(): void {

  }

//data source¿? paginator source
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort =this.sort;
  }

  applyFilter(event: Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  this.isFiltering =!!filterValue;
  }

  getAllPostulants(): void{
    this.postulantsApi.getAllPostulants().subscribe((response:any)=>{
      this.dataSource.data = response;
    });
  }

  editItem(element: any): void{
    console.log(element)
    this.postulantData = _.cloneDeep(element);
    this.isEditMode =true;
  }

  cancelEdit(): void{
    this.isEditMode = false;
    this.postulantForm.resetForm();
  }

  deleteItem(id: number): void{
    this.postulantsApi.deletePostulant(id).subscribe((response: any)=>{
      this.dataSource.data =this.dataSource.data.filter((o:any)=>{
      return o.id !==id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addPostulant(): void {
    const newPostulant = {firstname: this.postulantData.firstname, lastaname: this.postulantData.lastname}
    this.postulantsApi.addPostulant(newPostulant).subscribe((response: any) =>{
      this.dataSource.data.push({...response});
      this.dataSource.data =this.dataSource.data.map(o=>o);
    });
    }

    updatePostulant(): void {
    this.postulantsApi.updatePostulant(this.postulantData.id,this.postulantData)
      .subscribe((response: Postulant)=>{
      this.dataSource.data =this.dataSource.data.map((o:any)=>{
        if(o.id ===response.id){
          o=response;
        }
        return o;
      })
        this.cancelEdit();
      })
    }


    onSubmit():void{
    if(this.postulantForm.form.valid){
      if(this.isEditMode){
        this.updatePostulant();
      }else {
        this.addPostulant();
      }


    }else {
      console.log('Invalidad Data');
    }
    }



  navigateToAddPostulant():void {
    this.router.navigate(['/postulants/new'])
      .then(() => console.log('Navigated to New Postulant'));
  }
  navigateToEditPostulant(postulantId: number): void{
    this.router.navigate([`/postulants/${postulantId}`])
      .then(()=>console.log('Navigated to Edit Postulant'));
  }

  refresh(): void{
    console.log('about to reload');
    this.getAllPostulants();
  }


}
