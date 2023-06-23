import { Client } from 'pg';

export const client = new Client({
  host: 'localhost',
  port: 55432,
  database: 'trpctest',
  user: 'postgres',
  password: 'password',
});

client.connect();
