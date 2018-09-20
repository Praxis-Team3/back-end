import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Applicants } from '../models/applicants.interface';

@Injectable()
export class ApplicantsService {
  constructor(
    @InjectModel('Applicants')
    private readonly applicantModel: Model<Applicants>,
  ) {}

  async create(applicant: any): Promise<Applicants> {
    return this.applicantModel.create(applicant);
  }

  async emailAlreadyRegistered(email: string): Promise<boolean> {
    const count = await this.applicantModel.count({ email });
    console.log(count);

    return !!count;
  }
}
