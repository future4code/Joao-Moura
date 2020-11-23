const  performPurchase = (user: User, value: number): User | undefined =>{
    if(user.balance >= value){
        const updateUse: User = {
            name: user.name,
            balance: user.balance - value
        }
        return updateUse
    }

    return undefined
}

performPurchase({name:"joao",balance:100}, 20)