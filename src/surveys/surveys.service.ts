import { Injectable } from '@nestjs/common';
import { SurveyDto } from 'dto/survey.dto';
import { SurveyInterface } from 'models/survey.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SurveysService {

  constructor(
    @InjectModel('Surveys') private readonly surveyModel: Model<SurveyInterface>,
  ) { }

  async create(survey: SurveyDto): Promise<SurveyInterface> {
    return await this.surveyModel.create(survey);
  }

  async findAll(): Promise<SurveyInterface[]> {
    return await this.surveyModel.find();
  }
}
