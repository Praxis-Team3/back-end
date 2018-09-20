import { Module } from '@nestjs/common';
import { ApplicantsModule } from 'applicants/applicants.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), ApplicantsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
