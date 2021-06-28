import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobInformationComponent } from './pages/job-information/job-information.component';
import { PostulationsComponent } from './pages/postulations/postulations.component';
import {SearchJobsComponent} from "./pages/search-jobs/search-jobs.component";
import {AccountsettingsComponent} from "./pages/accountsettings/accountsettings.component";
import {ProfileStudentComponent} from "./pages/profile-student/profile-student.component";
import {ContratComponent} from "./pages/contrat/contrat.component";
import {InterviewsComponent} from "./pages/interviews/interviews.component";
import {MyAccountPostulantComponent} from "./pages/my-account-postulant/my-account-postulant.component";
import {ModifyProfessionalProfileComponent} from "./pages/modify-professional-profile/modify-professional-profile.component";
import {ModifyPersonalInformationComponent} from "./pages/modify-personal-information/modify-personal-information.component";
import {LoginRegisterComponent} from "./pages/login-register/login-register.component";
import {ChoosePostulantOrEmployerComponent} from "./pages/choose-postulant-or-employer/choose-postulant-or-employer.component";
import {EmployeerNewComponent} from "./pages/employeer-new/employeer-new.component";
import {PostulantNewComponent} from "./pages/postulant-new/postulant-new.component";
import {MainNavEmployeerComponent} from "./pages/main-nav-employeer/main-nav-employeer.component";
import {ChangepasswordComponent} from "./pages/changepassword/changepassword.component";
import {JobOfferNewComponentComponent} from "./pages/job-offer-new-component/job-offer-new-component.component";
import {InterviewPostulantAllComponent} from "./pages/interview-postulant-all/interview-postulant-all.component";
import {ApprovedPostulantComponent} from "./pages/approved-postulant/approved-postulant.component";
import {MyadsComponent} from "./pages/myads/myads.component";

const routes: Routes = [
  {path:'login', component: LoginRegisterComponent},
  {path:'employeer/new', component: EmployeerNewComponent},
  {path:'postulant/new', component: PostulantNewComponent},
  {path:'changepassword', component: ChangepasswordComponent},
  {path:'choosePostulantOrEmployeer', component: ChoosePostulantOrEmployerComponent},

  {path:'postulant/:postulantId', component:SearchJobsComponent }, //HOME POSTULANTE
  {path:'employeer/:employeerId', component: MyadsComponent},   //HOME EMPLEADOR

  {path:'postulant/:postulantId/job/:id', component: JobInformationComponent},
  {path:'postulant/:postulantId/:id/newpostulation', component: PostulationsComponent},
  {path:'postulant/:postulantId/interview', component: InterviewPostulantAllComponent},


  {path:'postulation/job/:id', component: PostulationsComponent},
  {path:'home/:postulantId', component:SearchJobsComponent },
  {path:'home/:postulantId/jobs', component : SearchJobsComponent},
  {path:'postulation/job/:id', component: PostulationsComponent},
  {path:':postulantId/jobs', component : SearchJobsComponent},
  {path:'home/:postulantId/jobs/:id', component: JobInformationComponent},
  {path:'home/:postulantId/jobs/:id/newpostulation', component: PostulationsComponent},
  {path:'account', component: AccountsettingsComponent},
  {path:':id/profile', component: ProfileStudentComponent},
  {path:'contrat', component: ContratComponent},
  {path:'postulants/:postulantId/joboffer/:jobOfferId/interview', component: InterviewsComponent},
  {path:'myaccount', component : MyAccountPostulantComponent},
  {path:'modify-professional-profile/:id', component: ModifyProfessionalProfileComponent},
  {path:'modify-personal-information', component: ModifyPersonalInformationComponent},
  {path:'employeer/:employeerId/job-offer/new', component: JobOfferNewComponentComponent},
  {path:'login', component: LoginRegisterComponent},
  {path:'choosePostulantOrEmployeer', component: ChoosePostulantOrEmployerComponent},
  {path:'employeer/new', component: EmployeerNewComponent},
  {path:'postulant/new', component: PostulantNewComponent},
  {path:'home/:employeerId', component: MainNavEmployeerComponent},
  {path:'employeer/:employeerId/job-offer/new', component: JobOfferNewComponentComponent},

  {path:'postulants/:postulantId/joboffer/:jobOfferId/approved-postulant', component: ApprovedPostulantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
