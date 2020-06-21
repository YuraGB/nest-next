import {Resolver, Query, Mutation, Args} from '@nestjs/graphql';

import { ArticleService } from "../../articles.service";
import { CreateArticleDto } from "../../dto/create-article.dto";
import { ArticleInput } from "../inputs/article.input";
import {CollectionsDto} from "../../dto/collections.dto";

@Resolver()
export class ArticlesResolver {
    constructor(
        private readonly articleService: ArticleService,
    ) {}

    @Query(() => [CreateArticleDto] )
    async article() {
        return this.articleService.findAll();
    }

    @Query(() => [CollectionsDto])
    async collections() {
        return this.articleService.findCollections();
    }

    @Mutation(() => CreateArticleDto)
    async createDDArticle(@Args('input') input: ArticleInput) {
        return this.articleService.createDDArticle(input);
    }

    @Mutation(() => CreateArticleDto)
    async createNGArticle(@Args('input') input: ArticleInput) {
        return this.articleService.createNGArticle(input);
    }
}