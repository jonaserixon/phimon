import * as dotenv from 'dotenv';
dotenv.config();
import Server from './server';
import Database from './config/database';

new Database();
new Server().start();
