import * as express from 'express';
import * as bodyParser from 'body-parser';
import MainRoutes from './routes/main';

const port = process.env['SERVER_PORT'] || 3000;

class Server {
    public app: express.Application;
    public mainRoutes = new MainRoutes();

    constructor() {
        this.app = express();
        this.middlewares();
        this.mountRoutes();
    }

    private middlewares(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private mountRoutes(): void {
        this.mainRoutes.routes(this.app);
    }
    
    public start(): void {
        this.app.listen(port, () => console.log('Express listening on port ' + port));
    }
}

export default Server;
