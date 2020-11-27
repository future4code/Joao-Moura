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

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}