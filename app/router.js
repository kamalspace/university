// import Router from 'koa-router';
// import combineRouters from 'koa-combine-routers';
// import {insertController } from './controller/testController.js';

// const router = new Router();
// const defaultRouter = combineRouters( router);

// //router.get('/fetch', selectController);
// nprouter.post('/create', insertController);

// export default defaultRouter;
import Router from 'koa-router';
import combineRouters from 'koa-combine-routers';
import { selectController, insertController } from './controller/testcontroller.js';

const router = new Router();

const defaultRouter = combineRouters( router);

//router.get('/fetc', selectController);

router.post('/creat', insertController);

export default defaultRouter;