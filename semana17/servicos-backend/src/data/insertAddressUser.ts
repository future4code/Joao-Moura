import {connection} from ".."
import { AddressUser } from "../types/AddressUse"
import {generateId} from "../services/generateId"

export const insertAddressUser = async (
    address: AddressUser, number: number, id: string, complement?: string
): Promise<void> => {

    try {
        await connection
            .insert({
                id: generateId(),
                public_place: address.logradouro,
                number: number,
                complement: complement,
                neighborhood: address.bairro,
                city: address.localidade,
                state:address.uf,
                user_id: id
            })
            .into("Address_User")
        
    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
}
