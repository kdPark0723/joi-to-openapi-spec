const Koa = require('koa');
const Router = require('koa-router');
const koaSwagger = require('koa2-swagger-ui');

const openApiSpecBuilder = require('../lib');

openApiSpecBuilder.setInfo({
  title: 'Sample API',
  description: 'Sample API',
  version: '0.0.1'
});

openApiSpecBuilder.addServer({
  url: 'http://localhost:3000',
  description: 'Optional server description, e.g. Main (production) server',
});

openApiSpecBuilder.addPath({
  method: 'GET',
  path: '/spec',
  parameters: {
    headers: {
      id: Joi.Object().required(),
    },
    path: {},
    query: {},
    body: {}
  }
});

const app = new Koa();
const router = new Router();

router.get('/spec', (ctx, next) => {
  ctx.body = 'test';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(
  koaSwagger({
    routePrefix: '/swagger', // host at /swagger instead of default /docs
    swaggerOptions: {
      url: 'http://localhost:3000/spec', // example path to json
    },
  }),
);

app.listen(3000);
