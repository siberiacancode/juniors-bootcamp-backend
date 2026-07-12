import type { ApolloDriverConfig } from '@nestjs/apollo';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'node:path';

import { OtpsModule } from '@/modules/otps/otps.module';
import { UsersModule } from '@/modules/users/users.module';

import { AppController } from './app.controller';
import { AuthModule } from './modules/auth';
import { SessionsModule } from './modules/sessions';
import { withBaseUrl } from './utils/helpers';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot(),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/static/locales/'),
        watch: true
      },
      resolvers: [{ use: QueryResolver, options: ['lang'] }, AcceptLanguageResolver]
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL!, { dbName: 'juniors-bootcamp' }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      useGlobalPrefix: true,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      formatError: (error: any) => {
        const graphQLFormattedError = {
          message: error.extensions?.exception?.response?.message || error.message,
          code: error.extensions?.code || 'SERVER_ERROR',
          name: error.extensions?.exception?.name || error.name
        };
        return graphQLFormattedError;
      },
      context: ({ req, reply }) => ({
        req,
        reply
      })
    }),
    ServeStaticModule.forRoot({
      serveRoot: withBaseUrl('/static'),
      rootPath: path.join(__dirname, '/static')
    }),
    AuthModule,
    OtpsModule,
    UsersModule,
    SessionsModule
    // CinemaModule,
    // DeliveryModule,
    // CarsModule,
    // GamesModule,
    // PizzaModule,
    // TesterModule,
    // CronModule
  ],
  providers: []
})
export class AppModule {}
