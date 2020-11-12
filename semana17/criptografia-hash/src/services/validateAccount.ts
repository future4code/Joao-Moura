import { ROLE } from "../types/AuthenticationData"

export const validateAccount = (email: string, password: string, role?: ROLE):string | boolean => {

    if(!email || !password){
        return "Enter 'email' and 'password'"
    }
    
    if(!email.includes("@") || email.trim() === ""){
       return "Enter a valid email address!"
    }

    if(password.trim() === "" || password.length < 7){
        return "Password must be longer than 6 characters!"
    }

    if(role){
        if(!(role in ROLE)){
            return "role must be 'NORMAL' or 'ADMIN' "
        }
    }

    return false
}