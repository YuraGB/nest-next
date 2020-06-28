/**
 * Create-Article DTO
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateArticleDto {
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
    picture?:  string;

    @Field({ nullable: true })
    video?:  string;

    @Field()
    type!: string;
}
