import {accounts, bankStatement} from './accounts'

export const checkAge = (date: string): boolean =>{
    const dt_birth = formattedDate(date)
    const today = new Date();

    const year = today.getFullYear() - dt_birth.getFullYear();
    const month = today.getMonth() - dt_birth.getMonth();
    const day = today.getDate() - dt_birth.getDate();

    if(year < 18 || year === 18 && month <= 0 && day <= 0 ){
        return false;
    }

    return true
}

export const formattedDate = (date: string): Date =>{
    const [dd, mm, yyyy] = date.split("/")
    const newDate: Date = new Date(`${yyyy}-${mm}-${dd}`) 

    return newDate
}

export const checkCpf = (cpf: string): boolean => {
    const resp: number = accounts.findIndex((user)=> user.cpf === cpf)

    if(resp === -1) return false

    return true

}

export const checkUserName = (name: string): boolean => {
    const resp: number = accounts.findIndex((user)=> user.name.toLowerCase() === name.toLowerCase())

    if(resp === -1) return false

    return true

}
export const saveDeposit = (index: number, value: number): void => {

    const newBankStatement: bankStatement= {
        value : value,
        description: "Deposito",
        date: new Date()
    }
   
    accounts[index].bankStatement.push(newBankStatement)
}

export const schedulePayment = ( value: number, description: string, cpf: string, date?: string): boolean => {

    const newBankStatement: bankStatement= {
        value,
        description,
        date: date ? formattedDate(date): new Date(),
        estarPago: false
    }

    let success: boolean = true

    accounts.forEach((item)=>{
        if(item.cpf === cpf){
            if(item.balance < value){
                success = false
            }else{
                // newBankStatement.estarPago = newBankStatement.date.getTime() < Date.now() 
                item.bankStatement.push(newBankStatement)
            }
        }
    })

    return success
}

export const updatePayments = (index: number): void =>{
    accounts[index].bankStatement.forEach((scheduling)=>{
        if(!scheduling.estarPago){
            if(accounts[index].balance > scheduling.value && scheduling.date.getTime() < Date.now()){
                scheduling.estarPago = true
                accounts[index].balance -= scheduling.value
            }
        }
    })
}

