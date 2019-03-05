import configs from '#/.wox';
import { Wox } from '@wox/wox';

const app = new Wox(configs);
app.createServer(app.$config.url).then(() => app.history_url_render(app.$config.url)).catch(e => {
  app.destoryServer();
  return Promise.reject(e);
});