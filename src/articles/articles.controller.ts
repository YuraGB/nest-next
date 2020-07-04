/**
 * Article Controller
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import {Controller, Get, Res} from '@nestjs/common';
import { RenderableResponse } from "nest-next";

@Controller()
export class ArticleController {

    @Get('views/articles/:name')
    public article(@Res() res: RenderableResponse) {
        res.render('articles/:name');
    }
}
