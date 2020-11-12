
export const validateInputLogin = (email: string, password: string):string | boolean => {

    if(!email || !password){
        return "Enter 'email' and 'password'"
    }
    
    if(!email.includes("@") || email.trim() === ""){
       return "Enter a valid email address!"
    }

    if(password.trim() === "" || password.length < 7){
        return "Password must be longer than 6 characters!"
    }

    return false
}