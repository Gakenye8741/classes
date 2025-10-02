import "dotenv/config"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import db from "./db"
import {client} from "./db"

// Creating our migrations
async function migration(){
    console.log("-----Imanza------");
    await migrate(db, {migrationsFolder: __dirname + "/migrations"});
    await client.end();
    console.log("-----imenyuria=-------");
    process.exit(0);
}

// Catch Errors
migration().catch()