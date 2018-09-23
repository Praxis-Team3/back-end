import {
  Controller,
  Post,
  Body,
  Param
} from '@nestjs/common';

import { StorageService } from './storage.service';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) { }

  @Post()
  async getUploadSignedUrl(
    @Body('contentType') contentType: any,
    @Body('email') email: string
  ): Promise<any> {
    return this.storageService.createUploadSignedUrl(contentType, email);
  }

  @Post(':key')
  async getDownloadSignedUrl(
    @Param('key') key: string,
  ): Promise<any> {
    return this.storageService.getDownloadSignedUrl(key);
  }
}
