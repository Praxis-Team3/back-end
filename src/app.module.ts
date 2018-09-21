import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EmailModule } from './email/email.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    EmailModule,
    StatusModule,
  ],
})
export class AppModule { }
