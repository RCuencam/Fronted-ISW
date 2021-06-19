import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from "@angular/common/http";
import {PostulantsApiService} from "./services/postulants-api.service";
import { PostulantsComponent } from './pages/postulants/postulants.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PostulationsComponent } from './pages/postulations/postulations.component';
import {MatStepperModule} from "@angular/material/stepper";
import { PostulationStepOneComponent } from './pages/postulation-step-one/postulation-step-one.component';
import { PostulationStepTwoComponent } from './pages/postulation-step-two/postulation-step-two.component';
import { PostulationStepTreeComponent } from './pages/postulation-step-tree/postulation-step-tree.component';
import { MainNavPostulantComponent } from './pages/main-nav-postulant/main-nav-postulant.component';
import { FilestackModule } from '@filestack/angular';
import { UploudfilesComponent } from './pages/uploudfiles/uploudfiles.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { FiltroPostulanteComponent } from './components/filtro-postulante/filtro-postulante.component';
import { SearchJobsComponent } from './pages/search-jobs/search-jobs.component';
import { SideMenuComponent } from './components/side-menu-postulant/side-menu.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobsApiService } from './services/jobs-api.service';
import { JobInformationComponent } from './pages/job-information/job-information.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    SearchJobsComponent,
    SideMenuComponent,
    FiltroPostulanteComponent,
    JobsListComponent,
    PostulationsComponent,
    PostulationStepOneComponent,
    PostulationStepTwoComponent,
    PostulationStepTreeComponent,
    MainNavPostulantComponent,
    UploudfilesComponent,
    PostulantsComponent,
    JobInformationComponent,

  ],
  imports: [
    HttpClientModule,
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
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FilestackModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatPaginatorModule

  ],
  providers: [PostulantsApiService,JobsApiService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
