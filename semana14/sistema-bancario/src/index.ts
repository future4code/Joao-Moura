import express, { Request, Response} from 'express'
import { user, accounts,checkAge, formattedDate, beRegistered } from './accounts'
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

app.get('/usersAll', (req:Request, resp: Response): void => {
    try {
        if(accounts.length < 1){
            throw new Error("No account found!")
        }

        resp.status(200).send(accounts)
    } catch (error) {
        resp.status(200).send({ message: error })
    }
})

app.post('/createUser', (req:Request, resp: Response): void => {
    try {
        const { name, cpf, dt_birth } = req.body
   

        if(!name && !cpf && !dt_birth){
            throw new Error("Inform all personal information!")

        }else if(!checkAge(dt_birth)){
            throw new Error("the user is under 18 years old")

        }else if(beRegistered(cpf)){
            throw new Error("cpf already belongs to a user")
        }

        const newAccounts: user ={ 
            name, 
            cpf, 
            dt_birth: formattedDate(dt_birth), 
            balance:0 
        }

       

        accounts.push(newAccounts)

        resp.status(200).send({message: 'Success'})
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