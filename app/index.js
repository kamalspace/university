import Koa from 'koa';
import {applyMiddleware} from './server.js';

const app = new Koa();

// Start server
app.listen(3000, () => {
    console.log(JSON.stringify(`Koa API server listening on 3000 in ${process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'}`));
});
applyMiddleware(app);
export default app;