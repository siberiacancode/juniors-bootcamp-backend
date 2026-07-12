import type { ApolloDriverConfig } from '@nestjs/apollo';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'node:path';

import { OtpsModule } from '@/modules/otps/otps.module';
import { UsersModule } from '@/modules/users/users.module';

import { AppController } from './app.controller';
import { AuthModule } from './modules/auth';
import { CronModule } from './modules/cron';
import { SessionsModule } from './modules/sessions';
import { AuthorizedOnlyGuard } from './utils/guards';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot(),
    // I18nModule.forRoot({
    //   fallbackLanguage: 'en',
    //   loaderOptions: {
    //     path: path.join(__dirname, '/static/locales/'),
    //     watch: true
    //   },
    //   resolvers: [{ use: QueryResolver, options: ['lang'] }, AcceptLanguageResolver]
    // }),
    MongooseModule.forRoot(process.env.DATABASE_URL!, { dbName: 'juniors-bootcamp' }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      debug: false,
      useGlobalPrefix: true,
      introspection: true,
      graphiql: false,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
      // TODO GqlExceptionFilter or formatError
      // formatError: (formattedError, error) => formattedError
      // TODO: fix context
      // context: async ({ req, reply }) => ({
      //   req,
      //   reply
      // })
    }),
    // ServeStaticModule.forRoot({
    //   serveRoot: withBaseUrl('/static'),
    //   rootPath: join(__dirname, 'src/static')
    // }),
    AuthModule,
    OtpsModule,
    UsersModule,
    SessionsModule,
    CronModule
    // CinemaModule,
    // DeliveryModule,
    // CarsModule,
    // GamesModule,
    // PizzaModule,
    // TesterModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: AuthorizedOnlyGuard }]
})
export class AppModule {}
