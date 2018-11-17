import {
  Get,
  Controller,
  ApplicationComponent,
} from '@wox/basic';

@Controller('/')
export default class DemoController extends ApplicationComponent {
  constructor(ctx) {
    super(ctx);
  }

  @Get('/')
  async welcome() {
    await this.ctx.render(this.ctx.Webview.Index);
  }
}