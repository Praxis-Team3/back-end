import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApplicantsController } from './applicants.controller';
import { ApplicantsService } from './applicants.service';

import { ApplicantSchema } from '../models/applicant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Applicants', schema: ApplicantSchema },
    ]),
  ],
  controllers: [ApplicantsController],
  providers: [ApplicantsService],
})
export class ApplicantsModule { }
