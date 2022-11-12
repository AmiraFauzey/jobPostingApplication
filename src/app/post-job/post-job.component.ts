import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  CompanyInformation,
  JobBenefitTypes,
  JobInformation,
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
  jobBenefit: JobBenefitTypes[] = [];
  jobSchedule: JobScheduleTypes[] = [];
  jobType: JobTypes[] = [];
  supplementaryType: SupplementalPayTypes[] = [];
  selectedJobTypes: JobTypes[] = [];
  selectedJobSchedule: JobScheduleTypes[] = [];
  selectedJobBenefit: JobBenefitTypes[] = [];
  selectedSupplemetaryType: SupplementalPayTypes[] = [];
  submitted = false;
  companyId:any;
  company:any;
  constructor(
    private jobWebServiceService: JobWebServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

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

  selectedNumberOfCandidatesForHire = this.noOfCandidateHire[0];

  HireDuration = [
    { id: 1, duration: '1 to 3 days' },
    { id: 2, duration: '3 to 7 days' },
    { id: 3, duration: '1 to 2 weeks' },
    { id: 4, duration: '2 to 4 weeks' },
    { id: 5, duration: 'More than 4 weeks' },
  ];

  payOption = [
    { id: 1, pay: 'Range' },
    { id: 2, pay: 'Starting amount' },
    { id: 3, pay: 'Maximum amount' },
    { id: 4, pay: 'Exact amount' },
  ];

  selectedPayOption = { id: 1, pay: 'Range' };

  payByRate = [
    { id: 1, rate: 'per hour' },
    { id: 2, rate: 'per day' },
    { id: 3, rate: 'per week' },
    { id: 4, rate: 'per month' },
    { id: 5, rate: 'per year' },
  ];

  selectedPayByRate = { id: 1, rate: 'per hour' };

  jobInformation: JobInformation = {
    jobId: 0,
    jobCountry: '',
    jobLanguage: '',
    jobTitle: '',
    jobLocation: '',
    jobDescription: '',
    noOfCandidateToHire: '',
    jobDuration: '',
    minimumSalary: '',
    maximumSalary: '',
    jobRate: '',
    payBy: ' ',
    amount: '',
    supplementalPayTypes: [],
    jobTypes: [],
    jobScheduleTypes: [],
    jobBenefitPayTypes: [],
    companyId: 1,
  };

  companyInformation:CompanyInformation = {
    companyId: NaN,
    companyName: '',
    companySize: '',
    employerName: '',
    companyPhoneNumber: '',
    companyLocation: '',
    companyLanguage: '',
    companyCountry: '',
  }

  ngOnInit(): void {
    // this.quicktoolService.getCategories().subscribe(res => {
    //   this.categories = res;
    // })
    this.jobWebServiceService.getAllJobBenefits().subscribe((res) => {
      this.jobBenefit = res;
    });

    this.jobWebServiceService.getAllJobSchedule().subscribe((res) => {
      this.jobSchedule = res;
    });

    this.jobWebServiceService.getAllJobSupType().subscribe((res) => {
      this.supplementaryType = res;
    });

    this.jobWebServiceService.getAllJobType().subscribe((res) => {
      this.jobType = res;
    });

    this.companyId = this.activatedRoute.snapshot.paramMap.get('id');
    this.company = this.jobWebServiceService.getCompanyById(this.companyId);
  }

  step(step: number): void {
    this.currentStep = step;
  }

  benefitTag(tag: any) {
    if (this.selectedJobBenefit.indexOf(tag) < 0) {
      this.selectedJobBenefit.push(tag);
      this.jobInformation.jobBenefitPayTypes = this.selectedJobBenefit;
    } else {
      this.selectedJobBenefit = this.selectedJobBenefit.filter((t) => t != tag);
    }
  }

  scheduleTag(tag: any) {
    if (this.selectedJobSchedule.indexOf(tag) < 0) {
      this.selectedJobSchedule.push(tag);
      this.jobInformation.jobScheduleTypes = this.selectedJobSchedule;
    } else {
      this.selectedJobSchedule = this.selectedJobSchedule.filter(
        (t) => t != tag
      );
    }
  }

  typeTag(tag: any) {
    if (this.selectedJobTypes.indexOf(tag) < 0) {
      this.selectedJobTypes.push(tag);
      this.jobInformation.jobTypes = this.selectedJobTypes;
    } else {
      this.selectedJobTypes = this.selectedJobTypes.filter((t) => t != tag);
    }
  }

  supplementaryTag(tag: any) {
    if (this.selectedSupplemetaryType.indexOf(tag) < 0) {
      this.selectedSupplemetaryType.push(tag);
      this.jobInformation.supplementalPayTypes = this.selectedSupplemetaryType;
    } else {
      this.selectedSupplemetaryType = this.selectedSupplemetaryType.filter(
        (t) => t != tag
      );
    }
  }

  onChange(event: any) {
    this.selectedPayOption = this.payOption.filter(
      (x) => x.id == event.target.value
    )[0];
  }

  onSubmit(value: JobInformation) {
    this.jobWebServiceService
      .saveJobInformation(value)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
