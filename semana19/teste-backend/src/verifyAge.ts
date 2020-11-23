import { Casino, User,LOCATION, Result, ResultItem } from "./model/Casino";

export const verifyAge = (casino: Casino, users: User[]): Result =>{
    const brazil: ResultItem = {
        allowed:[],
        unallowed:[]
    }

    const eua: ResultItem = {
        allowed:[],
        unallowed:[]
    }

    if(casino.location === LOCATION.BRAZIL) {
        users.map((user)=>{
            if(user.age > 17){
                brazil.allowed.push(user.name)
            }else{
                brazil.unallowed.push(user.name)
            }
        })
    }else if(casino.location === LOCATION.EUA) {
        users.map((user)=>{
            if(user.age > 20){
                eua.allowed.push(user.name)
            }else{
                eua.unallowed.push(user.name)
            }
        })
    }

    const listResult: Result = {
        brazilians:brazil,
        americans: eua
    }

    return listResult
}