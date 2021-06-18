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
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PostulationsComponent } from './pages/postulations/postulations.component';
import {MatStepperModule} from "@angular/material/stepper";
import { PostulationStepOneComponent } from './pages/postulation-step-one/postulation-step-one.component';
import { PostulationStepTwoComponent } from './pages/postulation-step-two/postulation-step-two.component';
import { PostulationStepTreeComponent } from './pages/postulation-step-tree/postulation-step-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    PostulantsComponent,
    MainNavComponent,
    PostulationsComponent,
    PostulationStepOneComponent,
    PostulationStepTwoComponent,
    PostulationStepTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
