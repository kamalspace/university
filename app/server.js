import helmet from 'koa-helmet';
import compress from 'koa-compress';
import koaBody from 'koa-body';
import server from 'koa-static-server';
import router from './router.js';
import zlib from 'zlib'
import { RateLimit } from 'koa2-ratelimit';
import userAgent from 'koa-useragent';



export const applyMiddleware = app => {

    app.use(async (ctx, next) => {
        try {
            await next()
        } catch (err) {
            console.log('Error handler:', err.message)
        }
    });

    app.use(async (ctx, next) => {
        
        ctx.set('Access-Control-Allow-Origin', '*' );
        ctx.set('Access-Control-Allow-Headers', '*');
        ctx.set('Access-Control-Allow-Methods', '*');
        // session.scope();
        // session.enableLinkedTop();
        // session.set('requestId', uuid());
        await next();
    });


    app.use(koaBody({
        multipart  : true,
        urlencoded : true,
        jsonLimit  : 50000000,
    }));

    app.use(compress({
        threshold : 1024,
        flush     : zlib.constants.Z_SYNC_FLUSH,
    }));

    // Blanket Rate limiter
    const limiter = RateLimit.middleware({
        interval : 10 * 60 * 1000, // 20 minutes
        max      : 1000,
    });


    // Security middleware starts.
    app.use(helmet()); // Enables security headers.

    app.use(userAgent);

    app.use(limiter); // Blanket app limit.

    // Fix for csrf.
    app.use(async (ctx, next) => {
        // console.log("3. CSRF:",ctx.request)
        const environment = process.env.NODE_ENV || 'dev';
        const browserIdentifier = 'mozilla';
        const requestUA = (ctx.userAgent.source).toLowerCase();
        const browserRequest = requestUA.includes(browserIdentifier);
        const requestMethod = ctx.request.method;
        await next();
    });

    app.use(router);
    // app.use(server({ rootDir: 'public/swagger-doc/dist', rootPath: '/docs' }));
};