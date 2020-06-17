import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Article extends Document {
    @Prop()
    href!: string;

    @Prop()
    label!: string;

    @Prop()
    shirtDescription!: string;

    @Prop()
    source!: string;

    @Prop()
    date!: Date;

    @Prop({ nullable: true })
    picture?: string;

    @Prop()
    video?: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);