import type { NestExpressApplication } from '@nestjs/platform-express';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { join } from 'node:path';
import * as client from 'prom-client';

import { CarsModule } from '@/modules/cars/cars.module';
import { CinemaModule } from '@/modules/cinema/cinema.module';
import { DeliveryModule } from '@/modules/delivery/delivery.module';
import { GamesModule } from '@/modules/games/games.module';
import { OtpsModule } from '@/modules/otps/otps.module';
import { PizzaModule } from '@/modules/pizza/pizza.module';
import { UsersModule } from '@/modules/users/users.module';

import { AppModule } from './app.module';
import { BASE_URL, withBaseUrl } from './utils/helpers';

const register = new client.Registry();
client.collectDefaultMetrics({ register });

const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status_code'],
  registers: [register]
});

const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.05, 0.1, 0.3, 0.5, 1, 2, 5],
  registers: [register]
});

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: { origin: '*' }
  });

  app.use((req, res, next) => {
    const end = httpRequestDuration.startTimer();

    res.on('finish', () => {
      const route = req.route?.path ?? req.path ?? 'unknown';

      httpRequestsTotal.inc({
        method: req.method,
        route,
        status_code: String(res.statusCode)
      });

      end({
        method: req.method,
        route,
        status_code: String(res.statusCode)
      });
    });

    next();
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

  app.use(withBaseUrl('/metrics'), async (_req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  });

  const moduleDocs = [
    { name: 'cars', module: CarsModule },
    { name: 'cinema', module: CinemaModule },
    { name: 'delivery', module: DeliveryModule },
    { name: 'games', module: GamesModule },
    { name: 'pizza', module: PizzaModule }
  ] as const;

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

  for (const moduleDoc of moduleDocs) {
    const includeModules = [UsersModule, OtpsModule, moduleDoc.module];
    const moduleDocument = SwaggerModule.createDocument(app, restConfig, {
      include: includeModules
    });

    app.use(
      withBaseUrl(`/rest/${moduleDoc.name}`),
      apiReference({
        content: moduleDocument,
        agent: {
          disabled: true
        },
        mcp: {
          disabled: true
        }
      })
    );
  }

  const document = SwaggerModule.createDocument(app, restConfig);
  app.use(
    withBaseUrl('/rest'),
    apiReference({
      content: document,
      agent: {
        disabled: true
      },
      mcp: {
        disabled: true
      }
    })
  );

  app.setBaseViewsDir(join(__dirname, 'static/views'));
  app.setViewEngine('hbs');

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()}/${BASE_URL}`);
}
bootstrap();
