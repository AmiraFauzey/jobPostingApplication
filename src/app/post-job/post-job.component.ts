import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
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
  //company: CompanyInformation;
  hideCompanyCountry = false;
  hideCompanyCountryLabel = true;
  isButtonCountryVisible = true;
  isButtonLanguageVisible = true;
  hiddenCompanyLanguageLabel = true;
  hideCompanyLanguage = false;
  hiddenCompanyNameLabel = true;
  isButtonNameVisible = true;
  hideCompanyName = false;
  session: any;
  hidePayOptionOne = false;
  hidePayOptionTwo = false;
  displayCompanyCountry = "none";
  displayCompanyLanguage = "none";
  displayCompanyName = "none";
  displayJobTitle = "none";
  displayJobDescription = "none";
  displayJobLocation = "none";
  displayJobType = "none";
  displayJobSchedule = "none";
  displayNoOfCandidate = "none";
  displayJobDuration = "none";
  displayPayType = "none";
  displaySupplementalType = "none";
  displayJobBenefit = "none"
  show = false;
  registerSucess = false;
  //companyData$: Observable<CompanyInformation>;

  constructor(
    private jobWebServiceService: JobWebServiceService,
    private route: ActivatedRoute,
    private router: Router
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
    jobId: null,
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
    companyId: null,
  };

  companyInformation: CompanyInformation = {
    companyId: null,
    companyName: '',
    companySize: '',
    employerName: '',
    companyPhoneNumber: '',
    companyLocation: '',
    companyLanguage: '',
    companyCountry: '',
  };

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

    // const companyId = parseInt(this.route.snapshot.paramMap.get('companyId'));
    // this.jobWebServiceService.getCompanyById(companyId)
    //   .subscribe(company => this.company = company);
    //   console.log(this.company)

    this.route.params.subscribe((param) => {
      this.jobWebServiceService
        .getCompanyById(param['companyId'])
        .subscribe((res) => {
          this.companyInformation = res;
          this.jobInformation.companyId = res.companyId;
          console.log(this.companyInformation);
         
        });
    });
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

  saveJob() {
    this.jobWebServiceService
      .saveJobInformation(this.jobInformation)
      .subscribe((response) => {
        console.log(response);
        this.registerSucess=true;
        this.router.navigate(['job/employerDashboard',response.companyId]);
      });
  }

  editCompanyCountry(){
    this.hideCompanyCountry = !this.hideCompanyCountry;
    this.hideCompanyCountryLabel = !this.hideCompanyCountryLabel;
  }

  editCompanyLanguage(){
    this.hideCompanyLanguage = !this.hideCompanyLanguage;
    this.hiddenCompanyLanguageLabel = !this.hiddenCompanyLanguageLabel;
  }

  editCompanyName(){
    this.hideCompanyName = !this.hideCompanyName;
    this.hiddenCompanyNameLabel = !this.hiddenCompanyNameLabel;
  }

  openModalOne(){
    this.displayCompanyCountry = "block";
  }

  onCloseModalOne(){
    this.displayCompanyCountry = "none";
  }

  saveOne(){
    this.displayCompanyCountry = "none";
  }

  openModalTwo(){
    this.displayCompanyLanguage = "block";
  }

  onCloseModalTwo(){
    this.displayCompanyLanguage = "none";
  }

  saveTwo(){
    this.show = true;
    this.displayCompanyLanguage = "none";
  }

  openModalThree(){
    this.displayCompanyName = "block";
  }

  onCloseModalThree(){
    this.displayCompanyName = "none";
  }

  saveThree(){
    this.show = true;
    this.displayCompanyName = "none";
  }

  openModalFour(){
    this.displayJobTitle = "block";
  }

  onCloseModalFour(){
    this.displayJobTitle = "none";
  }

  saveFour(){
    this.show = true;
    this.displayJobTitle = "none";
  }

  openModalFive(){
    this.displayJobDescription = "block";
  }

  onCloseModalFive(){
    this.displayJobDescription = "none";
  }

  saveFive(){
    this.show = true;
    this.displayJobDescription = "none";
  }

  openModalSix(){
    this.displayJobLocation = "block";
  }

  onCloseModalSix(){
    this.displayJobLocation = "none";
  }

  saveSix(){
    this.show = true;
    this.displayJobLocation = "none";
  }

  openModalSeven(){
    this.displayJobType = "block";
  }

  onCloseModalSeven(){
    this.displayJobType = "none";
  }

  saveSeven(){
    this.show = true;
    this.displayJobType = "none";
  }

  openModalEight(){
    this.displayJobSchedule = "block";
  }

  onCloseModalEight(){
    this.displayJobSchedule = "none";
  }

  saveEight(){
    this.show = true;
    this.displayJobSchedule = "none";
  }

  openModalNine(){
    this.displayNoOfCandidate = "block";
  }

  onCloseModalNine(){
    this.displayNoOfCandidate = "none";
  }

  saveNine(){
    this.show = true;
    this.displayNoOfCandidate = "none";
  }

  openModalTen(){
    this.displayJobDuration = "block";
  }

  onCloseModalTen(){
    this.displayJobDuration = "none";
  }

  saveTen(){
    this.show = true;
    this.displayJobDuration = "none";
  }

  openModalEleven(){
    this.displayPayType = "block";
  }

  onCloseModalEleven(){
    this.displayPayType = "none";
  }

  saveEleven(){
    this.show = true;
    this.displayPayType = "none";
  }

  openModalTwelve(){
    this.displaySupplementalType = "block";
  }

  onCloseModalTwelve(){
    this.displaySupplementalType = "none";
  }

  saveTwelve(){
    this.show = true;
    this.displaySupplementalType = "none";
  }

  openModalThirteen(){
    this.displayJobBenefit = "block";
  }

  onCloseModalThirteen(){
    this.displayJobBenefit = "none";
  }

  saveThirteen(){
    this.show = true;
    this.displayJobBenefit = "none";
  }
}
