import { config } from 'dotenv';

config();

const { PORT, NODE_ENV } = process.env;

export const Config = Object.freeze({
  PORT,
  NODE_ENV,
});
