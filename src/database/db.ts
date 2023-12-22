import { Pool } from "pg";

let conn: any;

const user = process.env.PG_USER;
const password = process.env.PG_PASSWORD;
const host = process.env.PG_HOST;
const port = process.env.PG_PORT ? parseInt(process.env.PG_PORT, 10) : undefined;
const database = process.env.PG_DATABASE;

const dbConfig = {
  user,
  password,
  host,
  port,
  database,
};


if (!conn) {
  conn = new Pool(dbConfig);
}


export { conn } 