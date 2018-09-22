import {
  Body,
  ConflictException,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { ApplicantsService } from './applicants.service';

import { ApplicantCreateDto } from '../dto/applicants.dto';
import { ApplicantInterface } from '../models/applicant.interface';
import { EmailService } from '../email/email.service';
import { Errors } from '../errors';

@Controller('applicants')
export class ApplicantsController {
  constructor(private readonly applicantsService: ApplicantsService, private readonly emailService: EmailService) { }

  @Post()
  async create(
    @Body(new ValidationPipe({ transform: true })) applicant: ApplicantCreateDto
  ): Promise<ApplicantInterface> {
    const userIsCurrentlyApplying = await this.applicantsService.isUserApplying(applicant.email);

    if (userIsCurrentlyApplying) throw new ConflictException(
      'User applying or already accepted',
      Errors.applicant_already_registered
    );

    return await this.applicantsService.create(applicant);
  }

  @Get()
  async findAll(): Promise<ApplicantInterface[]> {
    return await this.applicantsService.findAll();
  }

  @Post(':id/accept')
  async accept(@Param('id') id: number): Promise<ApplicantInterface> {
    return await this.applicantsService.accept(id);
  }

  @Post(':id/deny')
  async deny(@Param('id') id: number): Promise<ApplicantInterface> {
    return await this.applicantsService.reject(id);
  }
}
