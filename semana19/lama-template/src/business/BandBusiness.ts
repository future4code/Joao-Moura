import { BandDatabase } from "../data/BandDatabase";
import { BandInputDTO } from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness {
    
    async createBand(band: BandInputDTO){

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        if(!band.name || !band.musicGenre || !band.responsible){
            throw new Error("Invalid request body");
        }

        if(!band.token) throw new Error("Invalid token");

        const authenticator = new Authenticator()
        const infoUser = authenticator.getData(band.token)

        if(infoUser.role?.toLowerCase() !== "admin"){
            throw new Error("Permission invalid");
        }

        const bandDatabase = new BandDatabase()
        await bandDatabase.createBand(id, band.name, band.musicGenre, band.responsible)

    }
}