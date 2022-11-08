import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import {
  JobBenefitTypes,
  JobInformation,
  JobScheduleTypes,
  JobTypes,
  SupplementalPayTypes,
} from '../model/jobpostingapplication';

@Injectable({
  providedIn: 'root',
})
export class JobWebServiceService {
  private jobUrl = 'http://localhost:8080/api/jobInformation/job'; // URL to web api
  private jobBenefit = 'http://localhost:8080/api/JobBenefit/all';
  private jobType = 'http://localhost:8080/api/JobType/all';
  private jobSchedule = 'http://localhost:8080/api/JobSchedule/all';
  private jobSuppType = 'http://localhost:8080/api/JobSupplementaryType/all';
  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  //create object
  getAllJobs(): Observable<JobInformation[]> {
    return this.http.get<JobInformation[]>(this.jobUrl);
  }

  getAllJobBenefits(): Observable<JobBenefitTypes[]> {
    return this.http.get<JobBenefitTypes[]>(this.jobBenefit);
  }

  getAllJobType(): Observable<JobTypes[]>{
    return this.http.get<JobTypes[]>(this.jobType)
  }

  getAllJobSchedule(): Observable<JobScheduleTypes[]>{
    return this.http.get<JobScheduleTypes[]>(this.jobSchedule);
  }

  getAllJobSupType(): Observable<SupplementalPayTypes[]>{
    return this.http.get<SupplementalPayTypes[]>(this.jobSuppType);
  }
}
