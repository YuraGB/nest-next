/**
 * Server
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import favicon from 'serve-favicon';
import * as path from "path";

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

  await app.listen(3000);
}
bootstrap();
