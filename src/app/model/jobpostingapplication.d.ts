/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.36.1070 on 2022-11-05 23:51:47.

export interface CompanyInformation {
    companyId: number;
    companyName: string;
    companySize: string;
    employerName: string;
    companyPhoneNumber: string;
    companyLocation: string;
}

export interface JobBenefitTypes {
    jobBenefitTypeId: number;
    jobBenefitType: string;
}

export interface JobInformation {
    jobId: number;
    jobCountry: string;
    jobLanguage: string;
    jobTitle: string;
    jobLocation: string;
    jobDescription: string;
    noOfCandidateToHire: string;
    jobDuration: string;
    minimumSalary: string;
    maximumSalary: string;
    jobRate: string;
    resume: number;
    applicationDeadline: number;
    supplementalPayTypes: SupplementalPayTypes[];
    jobTypes: JobTypes[];
    jobScheduleTypes: JobScheduleTypes[];
    jobBenefitPayTypes: JobBenefitTypes[];
    companyId: number;
}

export interface JobScheduleTypes {
    jobScheduleTypeId: number;
    jobScheduleType: string;
}

export interface JobTypes {
    jobTypeId: number;
    jobType: string;
}

export interface SupplementalPayTypes {
    supplementalTypeId: number;
    supplementalType: string;
}
