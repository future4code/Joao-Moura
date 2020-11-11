import axios from  "axios"
import {AddressUser} from "../types/AddressUse"

const URL_API = "https://viacep.com.br/ws" 

export const getAddressByCep = async(cep: number): Promise<AddressUser> =>{
    try {
        const address: AddressUser = await axios.get(`${URL_API}/${cep}/json/`)

        return address

    } catch (error) {
        throw new Error("It was not possible to access Cep")
    }
}