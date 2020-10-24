import express, { Request, Response} from 'express'
import { user, accounts } from './accounts'
import { checkAge, formattedDate, checkCpf, checkUserName } from './utils'
import { AddressInfo } from 'net'  
import cors from 'cors'
import chalk from 'chalk'

const app = express()

app.use(express.json())
app.use(cors())

// message colors
const success = chalk.green.bold
const warn = chalk.yellow
const err = chalk.red.bold

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

        resp.status(200).send({message: 'Success'})
    } catch (error) {
        resp.status(400).send({ message: `${error}` })
    }
})

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

        resp.status(200).send({ Success: "The deposit was made" })
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