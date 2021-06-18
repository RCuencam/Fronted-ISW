import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostulationsComponent } from './pages/postulations/postulations.component';
import {SearchJobsComponent} from "./pages/search-jobs/search-jobs.component";

const routes: Routes = [
  {path:'jobs', component : SearchJobsComponent},
  {path:'postulations', component: PostulationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
