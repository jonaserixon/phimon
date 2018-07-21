import * as express from 'express';
import * as bodyParser from 'body-parser';
import MainRoutes from './routes/main';

const port = process.env['SERVER_PORT'] || 3000;

class Server {
    public app: express.Application;
    public client: any;
    public mainRoutes = new MainRoutes();

    constructor(client: any) {
        this.app = express();
        this.client = client;
        this.middlewares();
        this.mountRoutes();
    }

    public start(): void {
        this.app.listen(port, () => console.log('Express listening on port ' + port));
    }

    private middlewares(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private mountRoutes(): void {
        this.mainRoutes.routes(this.app, this.client);
    }    
}

export default Server;
