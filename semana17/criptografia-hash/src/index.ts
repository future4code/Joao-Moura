import express, { Express } from "express";
import knex from "knex";
import dotenv from "dotenv";
import cors from "cors";
import { AddressInfo } from "net";
import { singUp } from "./endpoints/singUp";
import { login } from "./endpoints/login";
import { getUser } from "./endpoints/getUser";
import { deleteUser } from "./endpoints/deleteUser";
import { getUserById } from "./endpoints/getUserById";

//=============== CONFIGURAÇÃO DO SERVIDOR ===================
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

//=================== ENDPOINTS ==============================

app.post("/singup", singUp)
app.post("/login", login)
app.get("/user/profile", getUser)
app.delete("/user/:id", deleteUser)
app.get("/user/:id", getUserById)