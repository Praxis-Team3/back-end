import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApplicantsController } from './applicants.controller';
import { ApplicantsService } from './applicants.service';
import { ApplicantsSchema } from 'models/applicants.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Applicants', schema: ApplicantsSchema },
    ]),
  ],
  controllers: [ApplicantsController],
  providers: [ApplicantsService],
})
export class ApplicantsModule {}
