import { Module } from '@nestjs/common';
import { MedicalRequestService } from './medical-request.service';
import { MedicalRequestController } from './medical-request.controller';
import { MedicalRequestSchema } from './schemas/medical-request.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [MedicalRequestController],
  providers: [MedicalRequestService],
  imports: [
    MongooseModule.forFeature([
      { name: 'MedicalRequest', schema: MedicalRequestSchema },
    ]),
  ],
})
export class MedicalRequestModule {}
