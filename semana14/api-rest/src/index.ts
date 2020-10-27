import express, {Request, Response} from 'express';
import {user, users, TYPE_USER} from './users'
import cors from 'cors';
import { AddressInfo } from "net" //extra: importando configuração de rede do node


const app = express(); //iniciando a aplicação web com express

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());


app.get("/users", (req: Request, res: Response): void =>{

    try{
        if(!users){
             throw new Error("Error searching for users")
        }

        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: `${error}`
        });
    }
});

app.get("/users/search", (req: Request, res: Response): void =>{

    try{
        const usersByType: user[] | undefined = users.filter((user)=>
            user.name.toLowerCase() === String(req.query.name).toLowerCase()
        )

        if(usersByType.length > 0){
            res.status(200).send(usersByType)
        } else {
            throw new Error("Error searching for users")
        }

    }catch(error){
        res.status(400).send({
            message: `${error}`
        });
    }
});

app.get("/users/:type", (req: Request, res: Response): void =>{

    try{
        const usersByType: user[] | undefined = users.filter((user)=>user.type === req.params.type.toUpperCase())

        if(usersByType.length > 0){
            res.status(200).send(usersByType)
        } else {
            throw new Error("Error searching for users")
        }

    }catch(error){
        res.status(400).send({
            message: `${error}`
        });
    }
});

app.post("/users", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;

        const checkUser: user | undefined = users.find((user)=> user.id === id)

        if(checkUser){
            throw new Error("ID already registered")
        }

        if(id && name && email && age && type){
            const user: user = {id, name, email, age, type}
            users.push(user);
            res.status(200).send({message: "User created successfully"});
        } else {
            throw new Error("Error inserting for users")
        }

    }catch(error){
        res.status(400).send({
            message: `${error}`
        });
    }
})

app.put("/users/:id", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;

        const userIndex: number | undefined = users.findIndex((user)=> user.id === Number(req.params.id))

        if(userIndex === -1){
            throw new Error("unregistered user")
        }

        if(name){
            users[userIndex].name = name
            res.status(200).send({message: "updated username"});
        } else {
            throw new Error("Error inserting for users")
        }

    }catch(error){
        res.status(400).send({
            message: `${error}`
        });
    }
})

app.patch("/users/:id", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;

        const userIndex: number | undefined = users.findIndex((user)=> user.id === Number(req.params.id))

        if(userIndex === -1){
            console.log(userIndex);
            throw new Error("unregistered user")
        }

        if(name){
            users[userIndex].name = name
            res.status(200).send({message: "updated username"});
        } else {
            throw new Error("Error inserting for users")
        }

    }catch(error){
        res.status(400).send({
            message: `${error}`
        });
    }
})

app.delete("/users/:id", (req: Request, res: Response): void=>{
    try{
        const userIndex: number | undefined = users.findIndex((user)=> user.id === Number(req.params.id))

        if(userIndex === -1){
            throw new Error("unregistered user")
        }

        users.splice(userIndex, 1)
        res.status(200).send({message: "deleted user"})
  
    }catch(error){
        res.status(400).send({
            message: `${error.message}`
        });
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
