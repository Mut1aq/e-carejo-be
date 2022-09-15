export interface MedicalRequest {
  createDate: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: number;
  address: string;
  country: string;
  DOB: Date;
  phoneNumber: string;
  faxNumber: string;
  email: string;
  medicalIssueExplanation: string;
  dateOfAppointment: Date;
  needsInterpreter: boolean;
  languages: string;
  needsVisa: boolean;
  _id: string;
  __v: number;
}
