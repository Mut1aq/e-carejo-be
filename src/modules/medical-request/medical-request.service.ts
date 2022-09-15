import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMedicalRequestDto } from './dto/create-medical-request.dto';
import {
  MedicalRequest,
  MedicalRequestDocument,
} from './schemas/medical-request.schema';

@Injectable()
export class MedicalRequestService {
  constructor(
    @InjectModel('MedicalRequest')
    private medicalRequestModel: Model<MedicalRequestDocument>,
  ) {}

  create(createMedicalRequestDto: CreateMedicalRequestDto) {
    const medicalRequest = new this.medicalRequestModel(
      createMedicalRequestDto,
    );
    return medicalRequest.save();
  }

  async findAll(): Promise<MedicalRequest[]> {
    const medicalRequests = await this.medicalRequestModel.find();
    if (medicalRequests.length > 0) {
      return medicalRequests;
    }
    throw new HttpException(`Medical Requests not Found`, HttpStatus.NOT_FOUND);
  }
}
