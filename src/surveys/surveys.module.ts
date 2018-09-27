import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SurveysController } from './surveys.controller';
import { SurveySchema } from '../models/survey.schema';
import { SurveysService } from './surveys.service';

@Module({
  controllers: [SurveysController],
  imports: [
    MongooseModule.forFeature([{ name: 'Surveys', schema: SurveySchema }])
  ],
  providers: [SurveysService],
})
export class SurveysModule { }
