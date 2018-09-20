import {
  Controller,
  Post,
  ConflictException,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  Body,
  BadRequestException,
  ValidationPipe,
} from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { Applicants } from 'models/applicants.interface';
import { ApplicantCreateDto } from 'models/applicants.dto';

@Controller('applicants')
export class ApplicantsController {
  constructor(private readonly applicantsService: ApplicantsService) { }

  @Post()
  @UseInterceptors(
    FileInterceptor('video', {
      dest: './uploads',
      limits: {
        fieldNameSize: 100,
        fileSize: 100 * 1024 * 1024,
      },
      fileFilter: (req, { mimetype }, callback) => {
        if (!mimetype.startsWith('video/'))
          callback(new BadRequestException('', 'invalid_video_format'), false);
        callback(null, true);
      },
    }),
  )
  async create(
    @UploadedFile() video,
    @Body(new ValidationPipe({ transform: true })) applicant: ApplicantCreateDto,
  ): Promise<Applicants> {
    const emailRegistered = await this.applicantsService.emailAlreadyRegistered(
      applicant.email,
    );
    if (emailRegistered) throw new ConflictException('', 'user_already_exists');

    console.log(video);

    return this.applicantsService.create(applicant);
  }
}
