import express, { Response, Request } from 'express'
import {countries, country} from './countries'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())

app.get("/countries/all", (req: Request, res: Response)=>{
    const resp = countries.map(country => ({
        id: country.id,
        name: country.name
    }))

    res.status(200).send(resp)
})

app.get("/countries/search", (req: Request, res: Response)=>{
    const {name, capital, continent} = req.query

    const resp: country[] | undefined = countries.filter(country =>{

            return country.name.includes(`${name}`) ||
                   country.capital.includes(`${capital}`) ||
                   country.continent.includes(`${continent}`) 
        
    })
  
    resp.length > 0 ? res.status(200).send(resp): res.status(404).send("Not found")
  
})

app.get("/countries/:id", (req: Request, res: Response)=>{
    const resp:country | undefined = countries.find(country=> country.id === Number(req.params.id))
    resp ? res.status(200).send(resp): res.status(404).send("Not found")
})

app.put("/countries/edit/:id", (req: Request, res: Response)=>{
    const body:country  = req.body 
    const resp:country | undefined = countries.find(country=>{
        return country.id === Number(req.params.id)
    })

    res.send(body)
    



})

app.listen(3003, ()=>{
    console.log("Servidor inicializado...");
})
