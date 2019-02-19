import {
  Http,
  Controller
} from '@wox/wox';
import IndexPage from '../webview/index.vue';

@Controller
export default class IndexController {
  @Http.Get
  async Home() {
    await this.ctx.render(IndexPage);
  }
}