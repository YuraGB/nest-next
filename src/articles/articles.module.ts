/**
 * Article Module
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { Module } from '@nestjs/common';

import { ArticlesResolver } from "./graphql/articles_resolvers/articles.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticleSchema } from "./graphql/schema/articles.schema";
import { ArticleService } from "./articles.service";
import { ArticleController } from "./articles.controller";

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'DoomsDayArticle', schema: ArticleSchema },
        { name: 'NegligenceArticle', schema: ArticleSchema }
    ])],
    providers: [ArticlesResolver, ArticleService],
    controllers: [ArticleController]
})
export class ArticlesModule {}
