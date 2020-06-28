/**
 * Article Service
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { Connection, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';

import { Article } from "./graphql/schema/articles.schema";
import { CreateArticleDto } from "./dto/create-article.dto";

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel('DoomsDayArticle') private DDArticleModel: Model<Article>,
        @InjectModel('NegligenceArticle') private NGArticleModel: Model<Article>,
        @InjectConnection() private connection: Connection
    ) {}

    async createDDArticle(createCatDto: CreateArticleDto): Promise<Article> {
        const createdArticle = new this.DDArticleModel(createCatDto);
        return createdArticle.save();
    }

    async createNGArticle(createCatDto: CreateArticleDto): Promise<Article> {
        const createdArticle = new this.NGArticleModel(createCatDto);
        return createdArticle.save();
    }

    async findAll(): Promise<Article[]> {
        const DDArticles = await this.DDArticleModel.find().exec();
        const NGArticles = await this.NGArticleModel.find().exec();

        return [...DDArticles, ...NGArticles];
    }

    async findCollections(): Promise<string[] | []> {
        try {
            const collectionsNames = await this.connection.db.listCollections().toArray();
            return collectionsNames;
        } catch (e) {
           return [];
        }
    }
}
