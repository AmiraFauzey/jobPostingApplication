import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PostJobComponent } from './post-job/post-job.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'job/post', component: PostJobComponent },
  { path: 'job/employerDashboard', component: EmployerDashboardComponent },


  { path:'**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
