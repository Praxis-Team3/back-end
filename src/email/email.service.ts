import * as Sengrid from "@sendgrid/mail";

import { Injectable } from '@nestjs/common';

import { EmailDto } from '../models/email.dto';

@Injectable()
export class EmailService {
  constructor() {
    Sengrid.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(email: EmailDto): Promise<any> {
    const result = await Sengrid.send(email);
    return result;
  }

  async sendWellcome(email: string, name: string): Promise<any> {
    const date: Date = new Date();
    const year: number = date.getFullYear();

    const emailObject = new EmailDto(
      email,
      process.env.SENDGRID_DEFAULT_SENDER,
      process.env.SENDGRID_TEMPLATES_USER_ACCEPTED,
      {
        name,
        year,
        site_year: year,
      }
    );

    return await this.sendEmail(emailObject);
  }

  async sendRejected(email: string, name: string): Promise<any> {
    const date: Date = new Date();
    const year: number = date.getFullYear();

    const emailObject = new EmailDto(
      email,
      process.env.SENDGRID_DEFAULT_SENDER,
      process.env.SENDGRID_TEMPLATES_USER_REJECTED,
      {
        name,
        year,
        site_year: year,
      }
    );

    return await this.sendEmail(emailObject);
  }

  async sendApplicantRegistered(email: string, name: string): Promise<any> {
    const date: Date = new Date();
    const year: number = date.getFullYear();

    const emailObject = new EmailDto(
      email,
      process.env.SENDGRID_DEFAULT_SENDER,
      process.env.SENDGRID_TEMPLATES_APPLICANT_REGISTERED,
      {
        name,
        year,
        site_year: year,
      }
    );

    return await this.sendEmail(emailObject);
  }
}
