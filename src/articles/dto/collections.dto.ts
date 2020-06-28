/**
 * Collection DTO
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CollectionsDto {
    @Field()
    name!: string;
}
