
export const validadeAccount = (email: string, password: string):string | boolean => {
    
    if(!email.includes("@") || email.trim() === ""){
       return "Digite um e-mail válido!"
    }

    if(password.length < 7){
        return "A senha deve possuir mais de 6 caracteres!"
    }

    return false
}