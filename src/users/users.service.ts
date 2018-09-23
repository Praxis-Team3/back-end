import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { UserInterface } from '../models/user.interface';
import { EmailService } from 'email/email.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel('Users') private readonly userModel: Model<UserInterface>,
    private readonly emailService: EmailService,
  ) { }

  async create(applicant: any): Promise<UserInterface> {
    const userCreated: UserInterface = await this.userModel.create(applicant);

    this.emailService
      .sendWellcome(applicant.email, `${applicant.names} ${applicant.lastnames}`)
      .then(undefined)
      .catch(undefined);

    return userCreated;
  }
}
