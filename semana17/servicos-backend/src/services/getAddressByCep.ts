import axios from  "axios"
import {AddressUser} from "../types/AddressUse"

const URL_API = "https://viacep.com.br/ws" 

export const getAddressByCep = async(cep: number): Promise<AddressUser> =>{
    try {
        const {data} = await axios.get(`${URL_API}/${cep}/json/`)

        return data

    } catch (error) {
        throw new Error("It was not possible to access Cep")
    }
}