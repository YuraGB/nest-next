/**
 * App Controller
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import {Controller, Get, Render, Res} from '@nestjs/common';
import { RenderableResponse } from "nest-next";

@Controller()
export class AppController {

  @Get()
  @Render('Index')
  public index() {}

  @Get('views/category/:name')
  public category(@Res() res: RenderableResponse) {
    res.render('category/[name]');
  }
}
