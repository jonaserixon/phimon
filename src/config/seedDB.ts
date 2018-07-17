import * as rq from 'request-promise-native';
import { Client } from '../../node_modules/@types/pg';

/**
 * Populate database with a bunch of Pokemons
 */
class Seed {
    public client: Client;

    constructor(client) {
        this.client = client;
        // this.table();
        this.start();
    }

    private async start(): Promise<void> {
        for (let i = 17; i <= 100; i++) {
            const options: rq.Options = {
                uri: 'http://pokeapi.salestock.net/api/v2/pokemon/' + i + '/',
                method: 'GET',
                headers: {
                    'User-Agent': 'PhiMon'
                },
                resolveWithFullResponse: true,
                json: true
            }
            
            try {
                const response = await rq(options);

                const types = response.body.types
                .sort((a, b) => a.slot - b.slot)
                .map((type) => type.type.name).toString();

                const pkmn = {
                    id: response.body.id,
                    sprite: response.body.sprites.front_default,
                    pkmnName: response.body.name,
                    types,
                    stats: {
                        speed: response.body.stats[0].base_stat,
                        spDef: response.body.stats[1].base_stat,
                        spAtk: response.body.stats[2].base_stat,
                        defense: response.body.stats[3].base_stat,
                        attack: response.body.stats[4].base_stat,
                        hp: response.body.stats[5].base_stat
                    },
                    weight: response.body.weight,
                    height: response.body.height
                }

                const queryString = 'INSERT INTO pokemon(id, sprite, pkmnName, type, speed, spDef, spAtk, def, atk, hp, weight, height) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';
                await this.client.query(queryString, 
                    [
                        pkmn.id, 
                        pkmn.sprite,
                        pkmn.pkmnName,
                        pkmn.types, 
                        pkmn.stats.speed, 
                        pkmn.stats.spDef, 
                        pkmn.stats.spAtk, 
                        pkmn.stats.defense, 
                        pkmn.stats.attack, 
                        pkmn.stats.hp, 
                        pkmn.weight, 
                        pkmn.height
                    ]
                );
                console.log(pkmn.pkmnName + ' #' + pkmn.id);
            } catch(err) {
                console.log(err);
            }
        }
    }

    private async table(): Promise<void> {
        // await this.client.query('DROP TABLE pokemon');
        const queryString = 'CREATE TABLE pokemon(id INTEGER PRIMARY KEY, sprite TEXT, pkmnName TEXT, type TEXT, speed INTEGER, spDef INTEGER, spAtk INTEGER, def INTEGER, atk INTEGER, hp INTEGER, weight INTEGER, height INTEGER)';
        await this.client.query(queryString);
    }
}

export default Seed;
