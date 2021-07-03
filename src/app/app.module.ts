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
import { AccountsettingsComponent } from './pages/accountsettings/accountsettings.component';
import { ProfileStudentComponent } from './pages/profile-student/profile-student.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from '@angular/material/expansion';
import { ContratComponent } from './pages/contrat/contrat.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { ApprovedPostulantComponent } from './pages/approved-postulant/approved-postulant.component';
import {MyAccountPostulantComponent} from "./pages/my-account-postulant/my-account-postulant.component";
import { EmployeerpruebaComponent } from './pages/employeerprueba/employeerprueba.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { ChoosePostulantOrEmployerComponent } from './pages/choose-postulant-or-employer/choose-postulant-or-employer.component';
import { EmployeerNewComponent } from './pages/employeer-new/employeer-new.component';
import { PostulantNewComponent } from './pages/postulant-new/postulant-new.component';
import { MainNavEmployeerComponent } from './pages/main-nav-employeer/main-nav-employeer.component';
import {EmployeerService} from "./services/employeer.service";
import {PostulantService} from "./services/postulant.service";
import {MatTabsModule} from "@angular/material/tabs";
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { InterviewsPostulantApiComponent } from './pages/interviews-postulant-api/interviews-postulant-api.component';
import { InterviewPostulantAllComponent } from './pages/interview-postulant-all/interview-postulant-all.component';
import { DialogContratComponent } from './pages/dialog-changes-saved-successfully/dialog-contrat.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogJobNewComponent } from './pages/dialog-job-new/dialog-job-new.component';
import { MyadsComponent } from './pages/myads/myads.component';
import { MypostulationsComponent } from './pages/mypostulations/mypostulations.component';
import { ModifyPersonalInformationPostulantComponent} from "./pages/modify-personal-information-postulant/modify-personal-information-postulant.component";
import { ModifyPersonalInformationEmployeerComponent } from './pages/modify-personal-information-employeer/modify-personal-information-employeer.component';
import {MyAccountEmployeerComponent} from "./pages/my-account-employeer/my-account-employeer.component";
import { SelectpostulantsComponent } from './pages/selectpostulants/selectpostulants.component';
import { NewInterviewComponent } from './pages/new-interview/new-interview.component';
import { MyadInformationComponent } from './pages/myad-information/myad-information.component';
import {MatMenuModule} from '@angular/material/menu';
import { SelectpostulantsMoreinfoComponent } from './pages/selectpostulants-moreinfo/selectpostulants-moreinfo.component';
import { ModifyProfessionalProfileComponent } from './pages/modify-professional-profile/modify-professional-profile.component';
import { ModifyCompanyProfileComponent } from './pages/modify-company-profile/modify-company-profile.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { MypostulantionInformationComponent } from './pages/mypostulantion-information/mypostulantion-information.component';
import {JobOfferNewComponentComponent} from "./pages/job-offer-new-component/job-offer-new-component.component";
import { AuthInterceptor } from './helpers/auth.interceptor';
import { DialogPostulationSendSuccessfullyComponent } from './pages/dialog-postulation-send-successfully/dialog-postulation-send-successfully.component';



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
    AccountsettingsComponent,
    ProfileStudentComponent,
    ContratComponent,
    InterviewsComponent,
    ApprovedPostulantComponent,
    MyAccountPostulantComponent,
    EmployeerpruebaComponent,
   LoginRegisterComponent,
    ChoosePostulantOrEmployerComponent,
    EmployeerNewComponent,
    PostulantNewComponent,
    MainNavEmployeerComponent,
    ChangepasswordComponent,
    InterviewsPostulantApiComponent,
    InterviewPostulantAllComponent,
    DialogContratComponent,
    DialogJobNewComponent,
    JobOfferNewComponentComponent,
    MyadsComponent,
    MypostulationsComponent,
    MyAccountEmployeerComponent,
    ModifyPersonalInformationPostulantComponent,
    ModifyPersonalInformationEmployeerComponent,
    SelectpostulantsComponent,
    NewInterviewComponent,
    MyadInformationComponent,
    SelectpostulantsMoreinfoComponent,
    MyAccountEmployeerComponent,
    ModifyProfessionalProfileComponent,
    ModifyCompanyProfileComponent,
    TermsAndConditionsComponent,
    MypostulantionInformationComponent,
    DialogPostulationSendSuccessfullyComponent,


  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatSidenavModule,
    FilestackModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatChipsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatMenuModule,
  ],


  providers: [PostulantsApiService,JobsApiService,EmployeerService,PostulantService, AuthInterceptor],

  bootstrap: [AppComponent]
})
export class AppModule { }
