import  express from 'express';

import authenticateRequest from './src/controllers/authController';

class Router{

constructor(){

 this.router = express.Router();
 this.router.route('/post/:id').post(authenticateRequest); 

}

}

export default Router;