import { Component, OnInit } from '@angular/core';
import { JobInformation } from '../model/jobpostingapplication';
import { JobWebServiceService } from '../services/job-web-service.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
  recentJobs: JobInformation[] = [];
  constructor(private jobWebService: JobWebServiceService) {}

  ngOnInit(): void {
    this.jobWebService.getAllJobs().subscribe((res) => {
		this.recentJobs = res;
		console.log(this.recentJobs);
	});
  }
}
