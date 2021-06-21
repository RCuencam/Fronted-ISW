import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Prueba} from "../../models/prueba";
import {PruebaApiService} from "../../services/prueba-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as _ from 'lodash';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})

export class PruebaComponent implements OnInit, AfterViewInit {
  @ViewChild('pruebaForm', {static: false}) pruebaForm!: NgForm;
  pruebaData: Prueba;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'lastname', 'age'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isEditMode = false;
  isFiltering = false;

  constructor(private pruebaApi: PruebaApiService,
              private router: Router) {
    this.pruebaData = {} as Prueba;
  }

  ngOnInit(): void {
    this.getAllPruebas();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyfilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.isFiltering = !!filterValue;
  }

  getAllPruebas(): void {
    this.pruebaApi.getAllPrueba().subscribe((response: any) => {
      this.dataSource.data = response;
    })
  }

  editItem(element: any): void {
    console.log(element);
    this.pruebaData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit(): void {
    this.isEditMode = false;
    this.pruebaForm.resetForm();
  }

  deleteItem(id: number): void {
    this.pruebaApi.deletePrueba(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: any) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addPrueba(): void {
    const newPrueba = {name: this.pruebaData.name, lastname: this.pruebaData.lastname, age: this.pruebaData.age};
    this.pruebaApi.addPrueba(newPrueba).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
  }

  updatePrueba(): void {
    this.pruebaApi.updatePrueba(this.pruebaData.id, this.pruebaData)
      .subscribe((response: Prueba) => {
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
    if (this.pruebaForm.form.valid){
      if(this.isEditMode){
        this.updatePrueba();
      }else {
        this.addPrueba();
      }
    }else {
      console.log('Invalid Data');
    }
  }

  navigateToAddPrueba(): void{
    this.router.navigate(['/prueba/new'])
      .then(() => console.log('Navigated to New Prueba'));
  }

  navigateToEditPrueba(pruebaId: Number) : void{
    this.router.navigate([`/prueba/${pruebaId}`])
      .then(() => console.log('Navigated to Edit Prueba'));
  }

  refresh(): void{
   console.log('about to reload');
   this.getAllPruebas();
  }
}
