import { Casino, User,LOCATION, Result, ResultItem, NACIONALITY } from "./model/Casino";

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

            if(user.nacionality === NACIONALITY.BRAZILIAN){
                if(user.age > 17){
                    brazil.allowed.push(user.name)
                }else{
                    brazil.unallowed.push(user.name)
                }
            }

            if(user.nacionality === NACIONALITY.AMERICAN){
                if(user.age > 17){
                    eua.allowed.push(user.name)
                }else{
                    eua.unallowed.push(user.name)
                }
            }
            
        })
    }else if(casino.location === LOCATION.EUA) {
        users.map((user)=>{

            if(user.nacionality === NACIONALITY.BRAZILIAN){
                if(user.age > 20){
                    brazil.allowed.push(user.name)
                }else{
                    brazil.unallowed.push(user.name)
                }
            }

            if(user.nacionality === NACIONALITY.AMERICAN){
                if(user.age > 20){
                    eua.allowed.push(user.name)
                }else{
                    eua.unallowed.push(user.name)
                }
            }

            
        })
    }

    const listResult: Result = {
        brazilians:brazil,
        americans: eua
    }

    return listResult
}