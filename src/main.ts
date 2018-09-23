import { NestFactory } from '@nestjs/core';

import * as compression from 'compression';
import * as dotenv from 'dotenv';
import * as helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  if (process.env.NODE_ENV !== 'production') dotenv.config();

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app
    .use(helmet())
    .use(compression());

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
