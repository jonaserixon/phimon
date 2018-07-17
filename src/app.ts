import * as dotenv from 'dotenv';
dotenv.config();
import Server from './server';
import Database from './config/database';
import Seed from './config/seedDB';

const db = new Database();
// new Seed(db.client);
new Server(db.client).start();
