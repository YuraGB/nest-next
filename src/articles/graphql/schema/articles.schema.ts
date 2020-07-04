/**
 * Article schema
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

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
    description!: string;

    @Prop()
    source!: string;

    @Prop()
    date!: Date;

    @Prop({ nullable: true })
    picture?: string;

    @Prop({ nullable: true })
    video?: string;

    @Prop({ nullable: true })
    type?: string;

    @Prop({ nullable: true })
    as?: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);