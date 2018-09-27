import { Controller, Post, Body, ValidationPipe, Get } from '@nestjs/common';

import { SurveysService } from './surveys.service';
import { SurveyInterface } from '../models/survey.interface';
import { SurveyDto } from '../dto/survey.dto';

@Controller('surveys')
export class SurveysController {

  constructor(
    private readonly surveyService: SurveysService,
  ) { }

  @Post()
  async create(
    @Body(new ValidationPipe({ transform: true })) survey: SurveyDto,
  ): Promise<SurveyInterface> {
    return await this.surveyService.create(survey);
  }

  @Get()
  async findAll(): Promise<SurveyInterface[]> {
    return await this.surveyService.findAll();
  }
}
