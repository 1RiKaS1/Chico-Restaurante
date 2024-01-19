// Imports
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes.js';
import './database/index.js'

// Inicializar o express
class App {
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
        this.server.use(cors());
        this.server.use(bodyParser.urlencoded({ extended: true }));
        this.server.use(bodyParser.json());
    }

    routes(){
        this.server.use(router);
    }
}

export default new App().server