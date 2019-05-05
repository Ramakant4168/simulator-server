import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import bodyParser from 'body-parser';


import config from '../webpack-config.js'

/**
 * Class defining the express app
 */
class Express{
    
	constructor(){
		
		this.PORT=3001;
        this.app = express();
        this.compiler =webpack(config);
	    
	}

	getAppInstance(){
        this.setUpMiddleware();
		this.app.listen(this.PORT, () => console.log('Example app listening on port 3001!'))
		return this.app;
    }
    
    setUpMiddleware(){

        this.app.use(webpackDevMiddleware(this.compiler, {
            publicPath: config.output.publicPath
        }))

        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({ extended: true }));
          
    }

}

export default Express;
