import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PostJobComponent } from './post-job/post-job.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostJobComponent,
    FrontPageComponent,
    ErrorPageComponent,
    EmployerDashboardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
