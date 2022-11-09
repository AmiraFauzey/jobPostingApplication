import { Component, OnInit } from '@angular/core';
import {
  JobBenefitTypes,
  JobScheduleTypes,
  JobTypes,
  SupplementalPayTypes,
} from '../model/jobpostingapplication';
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
  SupplementaryType: SupplementalPayTypes[] = [];
  PayOption: any;
  constructor(private jobWebServiceService: JobWebServiceService) {}

  noOfCandidateHire = [
    { id: 1, number: '1' },
    { id: 2, number: '2' },
    { id: 3, number: '3' },
    { id: 4, number: '4' },
    { id: 5, number: '5' },
    { id: 6, number: '6' },
    { id: 7, number: '7' },
    { id: 8, number: '8' },
    { id: 9, number: '9' },
    { id: 10, number: '10' },
    { id: 11, number: '10+' },
    { id: 12, number: 'I have an ongoing need to fill this role' },
  ];

  HireDuration = [
    { id: 1, duration: '1 to 3 days' },
    { id: 2, duration: '3 to 7 days' },
    { id: 3, duration: '1 to 2 weeks' },
    { id: 4, duration: '2 to 4 weeks' },
    { id: 5, duration: 'More than 4 weeks' },
  ];

  payBy = [
    { id: 1, pay: 'Range' },
    { id: 2, pay: 'Starting amount' },
    { id: 3, pay: 'Maximum amount' },
    { id: 4, pay: 'Exact amount' },
  ];

  payByRate = [
    { id: 1, rate: 'per hour' },
    { id: 2, rate: 'per day' },
    { id: 3, rate: 'per week' },
    { id: 4, rate: 'per month' },
    { id: 5, rate: 'per year' },
  ];

  ngOnInit(): void {
    // this.quicktoolService.getCategories().subscribe(res => {
    //   this.categories = res;
    // })
    this.jobWebServiceService.getAllJobBenefits().subscribe((res) => {
      this.JobBenefit = res;
    });

    this.jobWebServiceService.getAllJobSchedule().subscribe((res) => {
      this.JobSchedule = res;
    });

    this.jobWebServiceService.getAllJobSupType().subscribe((res) => {
      this.SupplementaryType = res;
    });

    this.jobWebServiceService.getAllJobType().subscribe((res) => {
      this.JobType = res;
    });
  }

  step(step: number): void {
    this.currentStep = step;
  }

  BenefitTag(tag: any) {
    if (this.JobBenefit.indexOf(tag) < 0) {
      this.JobBenefit.push(tag);
    } else {
      this.JobBenefit = this.JobBenefit.filter((t) => t != tag);
    }
  }

  ScheduleTag(tag: any) {
    if (this.JobSchedule.indexOf(tag) < 0) {
      this.JobSchedule.push(tag);
    } else {
      this.JobSchedule = this.JobSchedule.filter((t) => t != tag);
    }
  }

  TypeTag(tag: any) {
    if (this.JobType.indexOf(tag) < 0) {
      this.JobType.push(tag);
    } else {
      this.JobType = this.JobType.filter((t) => t != tag);
    }
  }

  SupplementaryTag(tag: any) {
    if (this.SupplementaryType.indexOf(tag) < 0) {
      this.SupplementaryType.push(tag);
    } else {
      this.SupplementaryType = this.SupplementaryType.filter((t) => t != tag);
    }
  }
}
