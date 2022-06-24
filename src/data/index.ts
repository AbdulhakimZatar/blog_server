import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pg = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
});