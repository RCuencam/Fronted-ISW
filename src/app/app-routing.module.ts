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
import {ModifyPersonalInformationPostulantComponent} from "./pages/modify-personal-information-postulant/modify-personal-information-postulant.component";
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
import {MypostulationsComponent} from "./pages/mypostulations/mypostulations.component";
import {ModifyPersonalInformationEmployeerComponent} from "./pages/modify-personal-information-employeer/modify-personal-information-employeer.component";


const routes: Routes = [
  {path:'login', component: LoginRegisterComponent},
  {path:'employeer/new', component: EmployeerNewComponent},
  {path:'postulant/new', component: PostulantNewComponent},
  {path:'changepassword', component: ChangepasswordComponent},
  {path:'choosePostulantOrEmployeer', component: ChoosePostulantOrEmployerComponent},

  {path:'postulant/:postulantId', component:SearchJobsComponent }, //HOME POSTULANTE
  {path:'postulant/:postulantId/joboffer/:jobofferId', component: JobInformationComponent},
  {path:'postulant/:postulantId/joboffer/:jobofferId/newpostulation', component: PostulationsComponent},
  {path:'postulant/:postulantId/interview', component: InterviewPostulantAllComponent},
  {path:'postulant/:postulantId/postulations', component: MypostulationsComponent},
  {path:'postulant/:postulantId/myaccount', component : MyAccountPostulantComponent},


//////////////////////////////////////////////////////////////////////////////////////////////////rutas de toolbarpostulante


//////////////////////////////////////////////////////////////////////////////////////////////////rutas de toolbarpostulante

  {path:'employeer/:employeerId', component: MyadsComponent},   //HOME EMPLEADOR
  {path:'employeer/:employeerId/joboffernew', component: JobOfferNewComponentComponent},


  {path:'employeer/:employeerId/postulant/:postulantId/joboffer/:jobOfferId/approved-postulant/contrat', component: ContratComponent},
  {path:'postulants/:postulantId/joboffer/:jobOfferId/interview', component: InterviewsComponent},

  {path:'employeer/:employeerId/postulant/:postulantId/joboffer/:jobOfferId/approved-postulant', component: ApprovedPostulantComponent},







  {path:'employeer/:employeerId/job-offer/new', component: JobOfferNewComponentComponent},

  {path:'login', component: LoginRegisterComponent},
  {path:'choosePostulantOrEmployeer', component: ChoosePostulantOrEmployerComponent},
  {path:'employeer/new', component: EmployeerNewComponent},
  {path:'postulant/new', component: PostulantNewComponent},
  {path:'home/:employeerId', component: MainNavEmployeerComponent},
  {path:'employeer/:employeerId/job-offer/new', component: JobOfferNewComponentComponent},
  {path:'postulants/:postulantId/joboffer/:jobOfferId/approved-postulant', component: ApprovedPostulantComponent},


  {path:'postulant/:postulantId/modify-personal-information-postulant', component : ModifyPersonalInformationPostulantComponent},
  {path:'employeer/:employeerId/modify-personal-information-employeer', component : ModifyPersonalInformationEmployeerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
