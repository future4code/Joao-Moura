import express, { Express, Request, Response} from 'express'
import { user, accounts } from './accounts'
import { checkAge, formattedDate, checkCpf, checkUserName, saveDeposit, schedulePayment, updatePayments } from './utils'
import { AddressInfo } from 'net'  
import cors from 'cors'
import chalk from 'chalk'

const app: Express = express()

app.use(express.json())
app.use(cors())

// message colors
const success = chalk.green.bold
const warn = chalk.yellow
const err = chalk.red.bold

// GET ALL USERS
app.get('/users', (req:Request, resp: Response): void => {
    try {
        if(accounts.length < 1){
            throw new Error("No account found!")
        }

        resp.status(200).send(accounts)
    } catch (error) {
        resp.status(200).send({ message: error })
    }
})

// CREATE USER
app.post('/users', (req:Request, resp: Response): void => {
    try {
        const { name, cpf, dt_birth } = req.body
   

        if(!name && !cpf && !dt_birth){
            throw new Error("Inform all personal information!")

        }else if(!checkAge(dt_birth)){
            throw new Error("the user is under 18 years old")

        }else if(checkCpf(cpf)){
            throw new Error("cpf already belongs to a user")
        }

        const newAccounts: user ={ 
            name, 
            cpf, 
            dt_birth: formattedDate(dt_birth), 
            balance:0 ,
            bankStatement: []
        }

        accounts.push(newAccounts)

        resp.status(201).send({message: 'Success'})
    } catch (error) {
        resp.status(400).send({ message: `${error}` })
    }
})

// GET USER
app.get('/users/:cpf', (req:Request, resp: Response): void => {
    try {
        const userIndex: number = accounts.findIndex((item)=> item.cpf === req.params.cpf)

        if(userIndex === -1){
            throw new Error("User not found")
        }

        const balance: number = accounts[userIndex].balance

        resp.status(200).send({balance: `${balance}`})
    } catch (error) {
        resp.status(400).send({ message: `${error}` })
    }
})

// DEPOSIT
app.put('/users', (req:Request, resp: Response): void => {
    try {
        const {name, cpf, value} = req.body

        if(!name || !cpf || !value){
            throw new Error("Enter all account information")

        } else if(!checkCpf(cpf) || !checkUserName(name)){
            throw new Error("Can not found user")

        }

        const userIndex: number = accounts.findIndex((user)=> user.cpf === cpf )

        accounts[userIndex].balance += value
        
        saveDeposit(userIndex, value)

        resp.status(200).send({ Success: "The deposit was made" })
    } catch (error) {
        resp.status(400).send({ message: `${error}` })
    }
})

// SCHEDULE PAYMENT
app.post('/users/payment', (req:Request, resp: Response): void => {
    try {
        const { value, description, cpf, date } = req.body

        if(!checkCpf(cpf) || !value || !description){
            throw new Error("Incorrect data")
        }

        if(!schedulePayment(value, description, cpf, date)){
            throw new Error("your balance is insufficient")
        }

        if (date) {
            if(formattedDate(date).getTime() < Date.now()){
                throw new Error("enter a future date")
            }
        }

        resp.status(200).send({message: "schedule made"})
    } catch (error) {
        resp.status(400).send({ message: `${error}` })
    }
})

// UPDATE PAYMENTS
app.put('/users/payment', (req:Request, resp: Response): void => {
    try {
        const {cpf} = req.body

        if(!checkCpf(cpf)){
            throw new Error("Can not found user")
        } 

        const userIndex: number = accounts.findIndex((user)=> user.cpf === cpf )

        updatePayments(userIndex)
        
        resp.status(200).send({ Success: "Updated payments" })
    } catch (error) {
        resp.status(400).send({ message: `${error}` })
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(success(`Server is running in http://localhost: ${address.port}`));
    } else {
       console.error(err(`Failure upon starting server.`));
    }
});