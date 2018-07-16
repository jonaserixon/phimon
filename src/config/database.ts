import * as pg from 'pg';
pg.defaults.ssl = true;

class Database {
    public client: pg.Client;

    constructor() {
        this.client = new pg.Client({
            connectionString: process.env['DB_CONNECTION_STRING']
        })
        this.connect();
    }

    private async connect(): Promise<void> {
        try {
            await this.client.connect();
            console.log('Successfully connected to DB.');
        } catch(err) {
            throw new Error(err);
        }
    }
}

export default Database;
