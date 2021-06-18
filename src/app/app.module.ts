import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchJobsComponent } from './pages/search-jobs/search-jobs.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { SideMenuComponent } from './components/side-menu-postulant/side-menu.component';

import {MatGridListModule} from '@angular/material/grid-list';

import { FiltroPostulanteComponent } from './components/filtro-postulante/filtro-postulante.component';
import { JobItemComponent } from './components/job-item/job-item.component';
import { HttpClientModule} from "@angular/common/http";
import {PostulantsApiService} from "./services/postulants-api.service";
import { PostulantsComponent } from './pages/postulants/postulants.component';
import {MatCardModule} from "@angular/material/card";



import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PostulationsComponent } from './pages/postulations/postulations.component';
import {MatStepperModule} from "@angular/material/stepper";
import { PostulationStepOneComponent } from './pages/postulation-step-one/postulation-step-one.component';
import { PostulationStepTwoComponent } from './pages/postulation-step-two/postulation-step-two.component';
import { PostulationStepTreeComponent } from './pages/postulation-step-tree/postulation-step-tree.component';
import { MainNavPostulantComponent } from './pages/main-nav-postulant/main-nav-postulant.component';


@NgModule({
  declarations: [
    AppComponent,

    SearchJobsComponent,
    SideMenuComponent,
    FiltroPostulanteComponent,
    JobItemComponent,
    PostulantsComponent,

    PostulationsComponent,
    PostulationStepOneComponent,
    PostulationStepTwoComponent,
    PostulationStepTreeComponent,
    MainNavPostulantComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,



  ],
  providers: [PostulantsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
