import { ROLE } from "../types/AuthenticationData"
import {InputSingUp } from '../types/InputSignUp'

export const validateInputSingUp = (address: InputSingUp):string | boolean => {
    const {email,password,cep,number,complement,role} = address

debugger
    if(!email || !password){
        return "Enter 'email' and 'password'"
    }
debugger   
    if(!email.includes("@") || email.trim() === ""){
       return "Enter a valid email address!"
    }
    debugger 
    if(password.trim() === "" || password.length < 7){
        return "Password must be longer than 6 characters!"
    }
    debugger 
    if(!cep || !number){
        return "inform CEP and NUMBER!"
    }
    debugger 
    if(role){
        if(!(role in ROLE)){
            return "role must be 'NORMAL' or 'ADMIN' "
        }
    }

    return false
}