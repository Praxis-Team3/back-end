import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApplicantsModule } from './applicants/applicants.module';
import { EmailModule } from './email/email.module';
import { StatusModule } from './status/status.module';
import { StorageModule } from './storage/storage.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URL,
      }),
    }),
    ApplicantsModule,
    EmailModule,
    StatusModule,
    StorageModule,
    UsersModule,
  ],
})
export class AppModule { }
