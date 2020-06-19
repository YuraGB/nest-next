import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class ArticleInput {
    @Field()
    href!: string;

    @Field()
    label!: string;

    @Field()
    shirtDescription!: string;

    @Field()
    description!: string;

    @Field()
    source!: string;

    @Field()
    date!: Date;

    @Field({ nullable: true })
    picture?: string;

    @Field({ nullable: true })
    video!:  string;
}