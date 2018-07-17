import * as dotenv from 'dotenv';
dotenv.config();
import Server from './server';
import Database from './config/database';

const db = new Database();
//import Seed from './config/seedDB';
// new Seed(db.client);
new Server(db.client).start();
