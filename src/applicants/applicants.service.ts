import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import * as Bcrypt from 'bcryptjs';

import { ApplicantInterface } from '../models/applicant.interface';
import { ApplicantCreateDto } from '../dto/applicants.dto';
import { EmailService } from '../email/email.service';
import { Errors } from '../errors';
import { UsersService } from '../users/users.service';

@Injectable()
export class ApplicantsService {

  constructor(
    @InjectModel('Applicants') private readonly applicantModel: Model<ApplicantInterface>,
    private readonly emailService: EmailService,
    private readonly userService: UsersService,
  ) { }

  async accept(id: number): Promise<ApplicantInterface> {
    const applicant: ApplicantInterface = await this.applicantModel
      .findOne({ id, status: 'pending' })
      .select({ password: 0 });

    if (!applicant)
      throw new NotFoundException('Applicant not found', Errors.applicant_not_found);

    const accepted = await this.applicantModel
      .update({ id }, { $set: { status: 'accepted' } });

    if ((!accepted.ok || !accepted.nModified))
      throw new BadRequestException('Error accepting applicant', Errors.applicant_update_error);

    await this.userService.create({
      birthdate: applicant.birthdate,
      company: applicant.company,
      email: applicant.email,
      id: applicant.id,
      lastnames: applicant.lastnames,
      names: applicant.names,
      password: applicant.password,
      phone: applicant.phone,
    });

    return applicant;
  }

  async create(applicant: ApplicantCreateDto): Promise<ApplicantInterface> {
    applicant.password = await Bcrypt.hash(applicant.password, 10);
    const applicantCreated: ApplicantInterface = await this.applicantModel.create(applicant);

    this.emailService
      .sendApplicantRegistered(
        applicantCreated.email,
        `${applicantCreated.names} ${applicantCreated.lastnames}`
      )
      .then(undefined)
      .catch(undefined);

    applicantCreated.password = null;

    return applicantCreated;
  }

  async emailAlreadyRegistered(email: string): Promise<boolean> {
    const count = await this.applicantModel.count({ email });
    return !!count;
  }

  async isUserApplying(email: string): Promise<boolean> {
    const user = await this.applicantModel.findOne({
      email,
      $or: [
        { status: 'pending' },
        { status: 'accepted' }
      ],
    });
    return !!user;
  }

  async findAll(): Promise<ApplicantInterface[]> {
    return await this.applicantModel
      .find({})
      .select({ __v: 0, password: 0 });
  }

  async reject(_id: number): Promise<ApplicantInterface> {
    const applicant: ApplicantInterface = await this.applicantModel
      .findOne({ _id, status: 'pending' })
      .select({
        password: 0,
      });

    if (!applicant)
      throw new NotFoundException('Applicant not found', Errors.applicant_not_found);

    const rejected = await this.applicantModel.update({ _id }, { $set: { status: 'rejected' } });

    if ((!rejected.ok || !rejected.nModified)) throw new BadRequestException(
      'Error rejecting applicant',
      Errors.applicant_update_error,
    );

    this.emailService
      .sendRejected(applicant.email, `${applicant.names} ${applicant.lastnames}`)
      .then(undefined)
      .catch(undefined);

    return applicant;
  }
}
