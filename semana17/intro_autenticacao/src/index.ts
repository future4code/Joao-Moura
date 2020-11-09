import express, {Express} from "express"
import {AddressInfo} from "net"
import knex from "knex"
import dotenv from "dotenv"
import cors from "cors"
import chalk from "chalk"

import { createUser } from "./endpoints/createUser"
import { getUserByEmail } from "./endpoints/getUserByEmail"

//=================== CONFIGURAÇÕES DO SERVIDOR =======================
dotenv.config()

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

const app : Express = express()
app.use(express.json()) 
app.use(cors())

export const success = chalk.green.bold
export const warn = chalk.yellow
export const err = chalk.red.bold

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(success(`Server is running in http://localhost:${address.port}`));
     } else {
        console.error(err(`Failure upon starting server.`));
     }
})

//======================= ENDPOINTS ==================================== 

app.post("/singup", createUser)
app.get("/user", getUserByEmail)