import * as express from 'express';
import * as request from 'request-promise-native';

const baseUrl: string = 'http://pokeapi.salestock.net/api/v2';

class MainRoutes {
    public routes(app): void {

        app.get('/', (req, res) => {
            res.json('Root route');
        })

        app.get('/pokemon/:id', async (req: express.Request, res: express.Response) => {

            const options: request.Options = {
                uri: baseUrl + '/pokemon/' + req.params.id + '/',
                method: 'GET',
                headers: {
                    'User-Agent': 'PhiMon'
                },
                resolveWithFullResponse: true,
                json: true
            }

            try {
                const response = await request(options);
                res.status(200).json({message: 'success', response});
            } catch(err) {
                console.log(err);
                res.status(500).json({message: 'error', err});
            }
        })
    }
}

export default MainRoutes;
