import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EmailModule } from './email/email.module';
import { StatusModule } from './status/status.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    EmailModule,
    StatusModule,
    StorageModule,
  ],
})
export class AppModule { }
