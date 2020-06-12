import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Render('Index')
  @Get()
  public index() {
    // initial props
    return {
      title: 'Next with Nest',
    };
  }
}