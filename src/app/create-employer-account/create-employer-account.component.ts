import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyInformation } from '../model/jobpostingapplication';
import { JobWebServiceService } from '../services/job-web-service.service';

@Component({
  selector: 'app-create-employer-account',
  templateUrl: './create-employer-account.component.html',
  styleUrls: ['./create-employer-account.component.css'],
})
export class CreateEmployerAccountComponent implements OnInit {
  registerSucess = false;
  companyInformation: CompanyInformation = {
    companyId: null,
    companyName: '',
    companySize: '',
    employerName: '',
    companyPhoneNumber: '',
    companyLocation: '',
    companyLanguage: '',
    companyCountry: ''
  };

  noOfEmployee = [
    { id: 1, employeeSize: '1-49' },
    { id: 2, employeeSize: '50-100' },
    { id: 3, employeeSize: '101-200' },
    { id: 3, employeeSize: '201-500' },
    { id: 4, employeeSize: '501-700' },
    { id: 5, employeeSize: '701-1000' },
  ];
  constructor(
    private jobWebServiceService: JobWebServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // onSubmit(value: CompanyInformation) {
  //   this.jobWebServiceService
  //     .saveCompanyInformation(value)
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }

  saveAndContinue(){
    this.jobWebServiceService
      .saveCompanyInformation(this.companyInformation)
      .subscribe((response) => {
        console.log(response);
        this.registerSucess=true;
        this.router.navigate(['/job/createEmployer',response.companyId]);
      });
    
  }
}
