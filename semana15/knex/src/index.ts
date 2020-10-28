import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {getAllActor} from './endPoints/getAllUsers'
import {getActorByName} from './endPoints/getUser'
import {getQuantityByGender} from './endPoints/getQuantityByGender'
import {putUpdateSalary} from './endPoints/putUpdateSalary'

/**************************************************************/

dotenv.config();

/**************************************************************/

export const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/actors', getAllActor)
app.get('/actors/search', getActorByName)
app.get('/actors/:gender', getQuantityByGender)
app.put('/actors', putUpdateSalary)

