
export const validadeAccount = (email: string, password: string):string | boolean => {

    if(!email || !password){
        return "Insira 'email' e 'password'"
     }
    
    if(!email.includes("@") || email.trim() === ""){
       return "Digite um e-mail válido!"
    }

    if(password.trim() === "" || password.length < 7){
        return "A senha deve possuir mais de 6 caracteres!"
    }

    return false
}