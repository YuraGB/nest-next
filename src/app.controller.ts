import {Controller, Get, Render, Res} from '@nestjs/common';
import {RenderableResponse} from "nest-next";

@Controller()
export class AppController {

  @Get()
  @Render('Index')
  public index() {

    return {
      title: 'Next with Nest',
    };
  }

  @Get('articles/:art')
  public article(@Res() res: RenderableResponse) {
    res.render('articles/1960');
  }
}