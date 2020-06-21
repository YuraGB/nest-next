import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CollectionsDto {
    @Field()
    name!: string;
}
