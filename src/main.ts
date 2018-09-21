import { NestFactory } from '@nestjs/core';

import * as compression from 'compression';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  app.use(compression());

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
