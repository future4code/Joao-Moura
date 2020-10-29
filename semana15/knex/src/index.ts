import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {getAllActor} from './endPoints/getAllUsers'
import {getActorByName} from '../src/endPoints/getActorByName'
import {getQuantityByGender} from './endPoints/getQuantityByGender'
import {putUpdateSalary} from './endPoints/putUpdateSalary'
import {deleteActor} from './endPoints/deleteActor'
import {getAvgSalary} from './endPoints/getAvgSalary'
import {getActorById} from './endPoints/getActorById'
import {createActor} from './endPoints/createActor'

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
// Exercícios 1 e 2
app.get('/actors', getAllActor)
app.get('/actors/search', getActorByName)
app.get('/actors/average-salary/:gender', getAvgSalary)
app.get('/actors/count', getQuantityByGender)
app.put('/actors', putUpdateSalary)
app.delete('/actors/:id', deleteActor)

//Exercício 3
app.get('/actor', getQuantityByGender)
app.get('/actor/:id', getActorById)

//Exercício 4
app.put('/actor', createActor)
app.post('/actor', putUpdateSalary)
