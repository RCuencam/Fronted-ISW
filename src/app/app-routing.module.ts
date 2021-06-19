import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobInformationComponent } from './pages/job-information/job-information.component';
import { PostulationsComponent } from './pages/postulations/postulations.component';
import {SearchJobsComponent} from "./pages/search-jobs/search-jobs.component";
import {AccountsettingsComponent} from "./pages/accountsettings/accountsettings.component";
import {ProfileStudentComponent} from "./pages/profile-student/profile-student.component";

const routes: Routes = [
  {path:'jobs', component : SearchJobsComponent},
  {path:'jobs/:id', component: JobInformationComponent},
  {path:'postulation/job/:id', component: PostulationsComponent},
  {path:'account', component: AccountsettingsComponent},
  {path:':id/profile', component: ProfileStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
