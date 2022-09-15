import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  Length,
  MaxDate,
  MinDate,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class CreateMedicalRequestDto {
  @IsNotEmpty({
    message: 'A first name must be provided',
  })
  @IsString()
  @Length(2, 30, {
    message: 'Your first name must be more than 2 characters and less than 30',
  })
  firstName: string;

  @IsNotEmpty({
    message: 'A middle name must be provided',
  })
  @IsString()
  @Length(2, 30, {
    message: 'Your middle name must be more than 2 characters and less than 30',
  })
  middleName: string;

  @IsNotEmpty({
    message: 'A last name must be provided',
  })
  @IsString()
  @Length(2, 30, {
    message: 'Your last name must be more than 2 characters and less than 30',
  })
  lastName: string;

  @IsNotEmpty({
    message: 'A gender must be provided',
  })
  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
    },
    {
      message: 'Gender must be a number, 0 for male, and 1 for female',
    },
  )
  gender: number;

  @IsNotEmpty({
    message: 'An address must be provided',
  })
  @IsString()
  address: string;

  @IsNotEmpty({
    message: 'A country must be provided',
  })
  @IsString()
  country: string;

  @IsNotEmpty({
    message: 'A date of birth must be provided',
  })
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @MaxDate(new Date(), {
    message: 'You must be older than one day.. right?',
  })
  DOB: Date; // ! mm-dd-yyyy

  @IsNotEmpty({
    message: 'A date for an appointment must be provided',
  })
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @MinDate(new Date())
  dateOfAppointment: Date; // ! mm-dd-yyyy

  @IsNotEmpty({
    message: 'A phone number must be provided',
  })
  @IsNumberString(
    {},
    { message: 'Your phone number must not contain characters' },
  )
  @Length(5, 16)
  phoneNumber: number;

  @IsNotEmpty({
    message: 'A fax number must be provided',
  })
  @IsNumberString(
    {},
    { message: 'Your fax number must not contain characters' },
  )
  faxNumber: number;

  @IsEmail({}, { message: 'You must provide a valid Email' })
  email: string;

  @IsNotEmpty({
    message: 'A brief medical explanation must be provided',
  })
  @IsString()
  @MinLength(20, {
    message: 'You need to explain the problem in at least 20 characters',
  })
  medicalIssueExplanation: string;

  @IsBoolean()
  @IsNotEmpty({
    message: 'You must tell us if you need an Interpreter',
  })
  needsInterpreter: boolean;

  @ValidateIf((obj) => obj.needsInterpreter)
  @IsString()
  @IsNotEmpty({
    message: 'You must tell us which languages you need for Interpretation',
  })
  languages: string;

  @IsBoolean()
  @IsNotEmpty({
    message: 'You must tell us if you need a visa',
  })
  needsVisa: boolean;
}
