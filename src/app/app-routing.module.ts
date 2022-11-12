import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployerAccountComponent } from './create-employer-account/create-employer-account.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PostJobComponent } from './post-job/post-job.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'job/employerDashboard', component: EmployerDashboardComponent },
  { path: 'job/createEmployer', component: CreateEmployerAccountComponent},
  { path: 'job/createEmployer/:id', component: PostJobComponent},
  { path:'**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
