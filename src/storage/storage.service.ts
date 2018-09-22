import { S3 } from 'aws-sdk';

import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageService {

  private readonly s3: S3;
  private readonly params: any;

  constructor() {
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_BUCKET_REGION,
    });
  }

  async createUploadSignedUrl(contentType: string, email: string): Promise<any> {
    const key = `${process.env.AWS_PSL_BASE_PATH}/video_${email}_${Date.now()}`;

    const url = this.s3.getSignedUrl('putObject', {
      Bucket: process.env.AWS_PSL_BUCKET,
      ContentType: contentType,
      ACL: 'bucket-owner-full-control',
      Key: key,
    });

    return {
      contentType,
      key,
      url,
    };
  }

  async getDownloadSignedUrl(key: string): Promise<any> {
    const url = this.s3.getSignedUrl('getObject', {
      Bucket: process.env.AWS_PSL_BUCKET,
      Key: key,
    });

    return { url };
  }
}
