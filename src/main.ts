/**
 * Server
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
