import {Application, Request, Response} from 'express';
import * as rq from 'request-promise-native';
import { Client } from '../../node_modules/@types/pg';

const baseUrl: string = 'http://pokeapi.salestock.net/api/v2';

class MainRoutes {
    public routes(app: Application, client: Client): void {
        app.get('/api/', (req: Request, res: Response) => {
            res.json('PhiMon - Web API');
        })

        app.get('/api/pokemon/', async (req: Request, res: Response) => {
            try {
                let result = await client.query('SELECT * FROM pokemon');
                res.status(200).json(result.rows);
            } catch(err) {
                throw new Error(err);
                res.status(500).json(err);
            }
        })
        
        //FILTERS
        app.get('/api/pokemon/filter/type/:type', async (req: Request, res: Response) => {
            try {
                const queryString = 'SELECT * FROM pokemon WHERE type LIKE $1';
                const values = ['%' + req.params.type + '%'];
                const result = await client.query(queryString, values);
                res.status(200).json(result.rows);
            } catch(err) {
                throw new Error(err);
                res.status(500).json(err);
            }
        })


        //SORTINGS
        app.get('/api/pokemon/sort/letter', async (req: Request, res: Response) => {
            //Sort all Pokemons based on first letter
        })

        app.get('/api/pokemon/sort/id', async (req: Request, res: Response) => {
            //Sort all Pokemons based on id
        })

        app.get('/api/pokemon/sort/hp', async (req: Request, res: Response) => {
            //Sort all Pokemons based on hp stat
        })
    }
}

export default MainRoutes;
