import {
  ControllerBasicClass,
  Controller,
  Get
} from '@wox/basic';

@Controller('/')
export default class DemoController extends ControllerBasicClass {
  constructor(ctx) {
    super(ctx);
  }

  @Get('/')
  async welcome() {
    await this.ctx.render(this.ctx.Webview.Index);
  }
}