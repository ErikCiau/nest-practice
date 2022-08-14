import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './posts/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Esto permite manejar las excepciones a nivel global
  // app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(3000);
}
bootstrap();
