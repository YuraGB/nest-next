import { Module } from '@nestjs/common';

import { ArticlesResolver } from "./graphql/articles_resolvers/articles.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticleSchema } from "./graphql/schema/articles.schema";
import { ArticleService } from "./articles.service";

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'DoomsDayArticle', schema: ArticleSchema },
        { name: 'NegligenceArticle', schema: ArticleSchema }
    ])],
    providers: [ArticlesResolver, ArticleService]
})
export class ArticlesModule {}