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
        
        // FILTERS
        app.get('/api/pokemon/filter/type/:type', async (req: Request, res: Response) => {
            // Get all Pokemons of a certain type and sort by pokedex ID
            try {
                const queryString = 'SELECT * FROM pokemon WHERE type LIKE $1 ORDER BY id ASC';
                const values = ['%' + req.params.type + '%'];
                const result = await client.query(queryString, values);
                res.status(200).json(result.rows);
            } catch(err) {
                res.status(500).json(err);
            }
        })

        app.get('/api/pokemon/filter/stat/:stat/:value', async (req: Request, res: Response) => {
            // Get all Pokemons that has a stat larger than the specified value
            try {
                const queryString = 'SELECT * FROM pokemon WHERE ' + req.params.stat + ' >= $1 ORDER BY ' + req.params.stat + ' ASC';
                const values = [req.params.value];
                const result = await client.query(queryString, values);
                res.status(200).json(result.rows);
            } catch(err) {
                res.status(500).json(err);
            }
        })



        // SORTING
        app.get('/api/pokemon/sort/column/:column/:sortType', async (req: Request, res: Response) => {
            try {
                const queryString = 'SELECT * FROM pokemon ORDER BY ' + req.params.column + ' ' + req.params.sortType;
                const result = await client.query(queryString);
                res.status(200).json(result.rows);
            } catch(err) {
                res.status(500).json(err);
            }
        })
    }
}

export default MainRoutes;
