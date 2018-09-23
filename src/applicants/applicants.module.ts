import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApplicantsController } from './applicants.controller';
import { ApplicantsService } from './applicants.service';

import { ApplicantSchema } from '../models/applicant.schema';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Applicants', schema: ApplicantSchema },
    ]),
    UsersModule,
  ],
  controllers: [ApplicantsController],
  providers: [ApplicantsService],
})
export class ApplicantsModule { }
