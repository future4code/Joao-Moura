import express, { Express, Request, Response} from 'express'
import { AddressInfo } from 'net' 
import knex from "knex";
import dotenv from "dotenv"; 
import cors from 'cors'
import chalk from 'chalk'

import {createUser} from './endPoits/createUser'
import {getUserById} from './endPoits/getUserById'
import {updateUser} from './endPoits/updateUser'
import {createTask} from './endPoits/createTask'

//=============== Configuração de ambiente =======================================
const app: Express = express()
app.use(express.json())
app.use(cors())

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

// message colors
export const success = chalk.green.bold
export const warn = chalk.yellow
export const err = chalk.red.bold


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(success(`Server is running in http://localhost: ${address.port}`));
    } else {
       console.error(err(`Failure upon starting server.`));
    }
});

//====================================================================================================


app.put('/user', createUser)
app.post('/user/edit/:id', updateUser)
app.get('/user/:id', getUserById)
app.put('/task', createTask)