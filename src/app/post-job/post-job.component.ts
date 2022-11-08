import { Component, OnInit } from '@angular/core';
import {JobBenefitTypes, JobScheduleTypes, JobTypes, SupplementalPayTypes} from '../model/jobpostingapplication';
import { JobWebServiceService } from '../services/job-web-service.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
})
export class PostJobComponent implements OnInit {
  
  currentStep = 1;
  JobBenefit: JobBenefitTypes[] = [];
  JobSchedule: JobScheduleTypes[] = [];
  JobType: JobTypes[] = [];
  SupplementaryType : SupplementalPayTypes[] = [];
  constructor(private jobWebServiceService: JobWebServiceService) {}

  ngOnInit(): void {
    // this.quicktoolService.getCategories().subscribe(res => {
    //   this.categories = res;
    // })
    this.jobWebServiceService.getAllJobBenefits().subscribe((res) => {
    this.JobBenefit = res;
    })

    this.jobWebServiceService.getAllJobSchedule().subscribe((res => {
      this.JobSchedule = res;
    }))

    this.jobWebServiceService.getAllJobSupType().subscribe((res => {
      this.SupplementaryType = res;
    }))

    this.jobWebServiceService.getAllJobType().subscribe((res=> {
      this.JobType = res;
    }))
  }

  step(step: number): void {
    this.currentStep = step;
  }

  BenefitTag(tag: any){
    if(this.JobBenefit.indexOf(tag) < 0){
      this.JobBenefit.push(tag);
    }else{
      this.JobBenefit = this.JobBenefit.filter((t) => t != tag);
    }
  }

  ScheduleTag(tag: any){
    if(this.JobSchedule.indexOf(tag) < 0){
      this.JobSchedule.push(tag);
    }else{
      this.JobSchedule = this.JobSchedule.filter((t) => t != tag);
    }
  }

  TypeTag(tag: any){
    if(this.JobType.indexOf(tag) < 0){
      this.JobType.push(tag);
    }else{
      this.JobType = this.JobType.filter((t) => t != tag);
    }
  }

  SupplementaryTag(tag: any){
    if(this.SupplementaryType.indexOf(tag) < 0){
      this.SupplementaryType.push(tag);
    }else{
      this.SupplementaryType = this.SupplementaryType.filter((t) => t != tag);
    }
  }
}
