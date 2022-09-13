import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMedicalRequestDto } from './dto/create-medical-request.dto';
import { UpdateMedicalRequestDto } from './dto/update-medical-request.dto';
import { MedicalRequestDocument } from './schemas/medical-request.schema';

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

  findAll() {
    return `This action returns all medicalRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalRequest`;
  }

  update(id: number, updateMedicalRequestDto: UpdateMedicalRequestDto) {
    return `This action updates a #${id} medicalRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalRequest`;
  }
}
