export const validateDataLogin = (email: string, password: string):void => {

    if(!email || !password){
        throw new Error("Enter email' and 'password'")
    }

    if(!email.includes("@")){
        throw new Error("Enter a valid email address!")
    }

    if(password.length < 6){
   
        throw new Error("Password must be at least 6 characters!")
    }
}
