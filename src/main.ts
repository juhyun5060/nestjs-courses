import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 유효성 검사를 위한 validator가 붙어있지 않은 값은 제외하고 request 받음
      transform: true, // request로 넘어온 값들 자동 형변환
      forbidNonWhitelisted: true, // whitelist로 걸러지는 값이 있다면 request 에러 발생(400 에러)
    }),
  );
  await app.listen(3000);
}
bootstrap();
