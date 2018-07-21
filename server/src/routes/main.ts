import {Application, Request, Response} from 'express';
import { Client } from '../../node_modules/@types/pg';

const baseUrl: string = 'http://pokeapi.salestock.net/api/v2';

class MainRoutes {
    public routes(app: Application, client: Client): void {
        app.get('/api/', (req: Request, res: Response) => {
            res.json('PhiMon - Web API');
        })

        app.get('/api/pokemon/', async (req: Request, res: Response) => {
            try {
                const result = await client.query('SELECT * FROM pokemon');
                res.status(200).json(result.rows);
            } catch(err) {
                res.status(500).json(err);
            }
        })

        // GET SPECIFIC POKEMON
        app.get('/api/pokemon/specific/:pokemon', async (req: Request, res: Response) => {
            try {
                const queryString = 'SELECT * FROM pokemon WHERE pkmnname LIKE $1';
                const values = ['%' + req.params.pokemon + '%'];
                const result = await client.query(queryString, values);
                res.status(200).json(result.rows);
            } catch(err) {
                res.status(500).json(err);
            }
        })
        
        // FILTER LIST
        app.get('/api/filter', async (req: Request, res: Response) => {
            try {
                const queryString = 'SELECT * FROM pokemon WHERE type LIKE $1 ORDER BY ' + req.query.sort + ' ASC';
                const values = ['%' + req.query.type + '%'];
                const result = await client.query(queryString, values);
                res.status(200).json(result.rows);
            } catch(err) {
                console.log(err);
                res.status(500).json(err);
            }
        })
    }
}

export default MainRoutes;
