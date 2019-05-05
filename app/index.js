import Express from './app';
import Router from './router';


const app = new Express().getAppInstance();


app.use('/',new Router().router);


