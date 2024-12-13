import { config } from 'dotenv';
import path from 'path';

config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) });

const { PORT, NODE_ENV, DATABASE_URL } = process.env;

export const Config = Object.freeze({
  PORT,
  NODE_ENV,
  DATABASE_URL,
});
