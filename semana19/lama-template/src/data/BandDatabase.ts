import { BandInputDTO, BandOutputDTO, GetBandInputDTO } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase{
    private static TABLE_NAME = "NOME_TABELA_BANDAS"

    public async createBand(
        id:string,
        name: string,
        music_genre: string,
        responsible: string
    ):Promise<void>{
        try {
            await this.getConnection()
            .insert({id, name, music_genre, responsible})
            .into(BandDatabase.TABLE_NAME)

        } catch (error) {
            if(error.sqlMessage.includes("Duplicate entry")){
                throw new Error("band already be registered");
            }
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getInfBand(search: GetBandInputDTO):Promise<BandOutputDTO>{
        try {
            const [ result ] = await this.getConnection()
                                .select("*")
                                .from(BandDatabase.TABLE_NAME)
                                .where({id: search.type})
                                .orWhere({name: search.type}) 
            const band: BandOutputDTO = {
                id: result.id,
                name: result.name,
                musicGenre: result.music_genre,
                responsible: result.responsible
            }

            return band

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}