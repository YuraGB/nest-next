import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import {ArticlesModule} from "./articles/articles.module";
import config from './config.json';

@Module({
  imports: [
    ArticlesModule,
    RenderModule.forRootAsync(
        Next({ dev: process.env.NODE_ENV !== 'production' }),
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot(`mongodb+srv://${config.env.MONGO_USER}:${config.env.MONGO_PASSWORD}@cluster0-r3zwb.mongodb.net/${config.env.MONGO_DB}?retryWrites=true&w=majority`),
  ],
  controllers: [AppController],
})
export class AppModule {}