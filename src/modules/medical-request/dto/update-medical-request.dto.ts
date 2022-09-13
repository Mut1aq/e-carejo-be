import { PartialType } from '@nestjs/swagger';
import { CreateMedicalRequestDto } from './create-medical-request.dto';

export class UpdateMedicalRequestDto extends PartialType(CreateMedicalRequestDto) {}
