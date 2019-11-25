const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

const index = ctx => {
  ctx.body = 'NOde.JS do zero ao deploy';
};

const hello = ctx => {
  const name = ctx.params.name || 'World';
  ctx.body = `Hello ${name}`;
};

router.get('/hello/:name', hello);
router.get('/hello', hello);
router.get('/', ctx => (ctx.body = 'Node.JS do Zero ao Deploy'));

app.use(router.routes());

const port = process.env.PORT;

app.listen(port).on('listening', () => console.log(`Pooorta ${port}`));
