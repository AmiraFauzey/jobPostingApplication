import { TestBed } from '@angular/core/testing';

import { JobWebServiceService } from './job-web-service.service';

describe('JobWebServiceService', () => {
  let service: JobWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
