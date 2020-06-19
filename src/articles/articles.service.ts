
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from "./graphql/schema/articles.schema";
import { CreateArticleDto } from "./dto/create-article.dto";

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel('DoomsDayArticle') private DDArticleModel: Model<Article>,
        @InjectModel('NegligenceArticle') private NGArticleModel: Model<Article>,
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
}
