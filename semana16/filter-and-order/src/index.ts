import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {getUser} from "./endpoints/getUser";
import {getUserType} from "./endpoints/getUserType";
import {getAllUser} from "./endpoints/getAllUser";
import {getUserPage} from "./endpoints/getUserPage";
import {getUsers} from "./endpoints/getUsers";

// ==================== configurações do servidor =================== 
dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
// ================================================================

app.get("/users", getAllUser);
app.get("/users/filter/:type", getUserType);
app.get("/users/search", getUser);
app.get("/users/:page", getUserPage);
