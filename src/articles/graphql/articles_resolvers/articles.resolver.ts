import {Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { ArticleService } from "../../articles.service";
import { CreateArticleDto } from "../../dto/create-article.dto";
import {ArticleInput} from "../inputs/article.input";

@Resolver()
export class ArticlesResolver {
    constructor(
        private readonly articleService: ArticleService,
    ) {}

    @Query(() => [CreateArticleDto])
    async article() {
        return this.articleService.findAll();
    }

    @Mutation(() => CreateArticleDto)
    async createArticle(@Args('input') input: ArticleInput) {
        return this.articleService.create(input);
    }
}