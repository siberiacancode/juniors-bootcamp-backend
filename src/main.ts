import type { NestExpressApplication } from '@nestjs/platform-express';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { join } from 'node:path';

import { AppModule } from './app.module';
import { BASE_URL, withBaseUrl } from './utils/helpers';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: { origin: '*' }
  });

  app.setGlobalPrefix(BASE_URL);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true }
    })
  );

  app.use(withBaseUrl('/health'), (_req, res) => {
    res.json({ status: true });
  });

  const restConfig = new DocumentBuilder()
    .setTitle('juniors bootcamp backend 🔥')
    .setDescription('Апи для выполнения индивидуальных заданий')
    .setVersion('1.0')
    .addServer(process.env.SERVER_URL)
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    })
    .build();

  const document = SwaggerModule.createDocument(app, restConfig);
  app.use(
    withBaseUrl('/rest'),
    apiReference({
      content: document
    })
  );

  app.setBaseViewsDir(join(__dirname, 'static/views'));
  app.setViewEngine('hbs');

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()}/${BASE_URL}`);
}
bootstrap();
