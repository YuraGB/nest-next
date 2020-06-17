
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from "./graphql/schema/articles.schema";
import { CreateArticleDto } from "./dto/create-article.dto";

@Injectable()
export class ArticleService {
    constructor(@InjectModel('Article') private articleModel: Model<Article>) {}

    async create(createCatDto: CreateArticleDto): Promise<Article> {
        const createdCat = new this.articleModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Article[]> {
        return this.articleModel.find().exec();
    }
}
