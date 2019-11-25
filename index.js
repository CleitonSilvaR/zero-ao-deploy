const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

const index = ctx => {
  ctx.body = 'NOde.JS do zero ao deploy';
};

const hello = ctx => {
  const name = hello.parans.name || 'World';
  ctx.body = `Hello ${name}`;
};

router.get('/', index);
router.get('/hello', hello);
router.get('/hello/:name', hello);

app.use(router.routes());

const port = 3000;

app.listen(port).on('listening', () => console.log(`Pooorta ${port}`));
