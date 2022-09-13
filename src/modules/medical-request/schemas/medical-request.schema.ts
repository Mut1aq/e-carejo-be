import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Mongoose, Document } from 'mongoose';

export type MedicalRequestDocument = MedicalRequest & Document;

@Schema({
  validateBeforeSave: true,
})
export class MedicalRequest {
  @Prop({
    required: [true, 'First Name Must be Provided'],
    type: String,
  })
  firstName: string;

  @Prop({
    required: [true, 'Middle Name Must be Provided'],
    type: String,
  })
  middleName: string;

  @Prop({
    required: [true, 'Last Name Must be Provided'],
    type: String,
  })
  lastName: string;

  @Prop({
    required: [true, 'Gender Must be Provided'],
    type: Number,
  })
  gender: number; // 0 for male, 1 for female

  @Prop({
    required: [true, 'Address Must be Provided'],
    type: String,
  })
  address: string;

  @Prop({
    required: [true, 'Country Must be Provided'],
    type: String,
  })
  country: string;

  @Prop({
    required: [true, 'Date of Birth Must be Provided'],
    type: Date,
  })
  DOB: Date;

  @Prop({
    required: [true, 'Phone Number Must be Provided'],
    type: String,
  })
  phoneNumber: string;

  @Prop({
    required: [true, 'Fax Number Must be Provided'],
    type: String,
  })
  faxNumber: string;

  @Prop({
    type: String,
  })
  email: string;

  @Prop({
    required: [
      true,
      'A Brief Explanation of The Medical Problem Must be Provided',
    ],
    type: String,
  })
  medicalIssueExplanation: string;

  @Prop({
    required: [true, 'Date for an Appointment Must be Provided'],
    type: Date,
  })
  dateOfAppointment: Date;

  @Prop({
    required: [true, 'You Must Confirm Whether You Need an Interpreter'],
    type: Boolean,
  })
  needsInterpreter: boolean;

  @Prop({
    required: [true, 'You Must Confirm Whether You Need a Visa'],
    type: Boolean,
  })
  needsVisa: boolean;
}

export const MedicalRequestSchema =
  SchemaFactory.createForClass(MedicalRequest);
