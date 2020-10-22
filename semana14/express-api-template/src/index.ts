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
    let search: country[] = countries
    
    if(name){
        search = search.filter( item => item.name.includes(String(name)))
    }
    if(capital){
        search = search.filter( item => item.capital.includes(String(capital)))
    }
    if(continent){
        search = search.filter( item => item.continent.includes(String(continent)))
    }

    if( search.length < 1 || (!name && !capital && continent)){
        res.status(404).send("Not found")
    }else{
        res.status(200).send(search)
    }
  
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
