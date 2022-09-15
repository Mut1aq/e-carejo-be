import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalRequestService } from './medical-request.service';
import { CreateMedicalRequestDto } from './dto/create-medical-request.dto';
import { UpdateMedicalRequestDto } from './dto/update-medical-request.dto';

@Controller('medical-request')
export class MedicalRequestController {
  constructor(private readonly medicalRequestService: MedicalRequestService) {}

  @Post()
  create(@Body() createMedicalRequestDto: CreateMedicalRequestDto) {
    return this.medicalRequestService.create(createMedicalRequestDto);
  }

  @Get()
  findAll() {
    return this.medicalRequestService.findAll();
  }

}
