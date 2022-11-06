import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobInformation } from '../model/jobpostingapplication';

@Injectable({
  providedIn: 'root',
})
export class JobWebServiceService {
  private jobUrl = 'http://localhost:8080/api/jobInformation/job'; // URL to web api
  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  //create object
  getAllJobs(): Observable<JobInformation[]> {
    return this.http.get<JobInformation[]>(this.jobUrl);
  }
}
