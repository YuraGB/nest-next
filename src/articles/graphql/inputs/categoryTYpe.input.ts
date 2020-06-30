/**
 *
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CategoryTypeInput {
    @Field()
    type!: string;
}
