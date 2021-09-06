import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { postgraph } from './postgraphile';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.use(postgraph);
  await app.listen(5004);
}
bootstrap();
