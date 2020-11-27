import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandInputDTO, GetBandInputDTO } from "../model/Band";

export class BandController {
    async createBand(req: Request,res:Response) {
        try {
            const input: BandInputDTO = {
                name: req.body.name,
                musicGenre: req.body.musicGenre,
                responsible: req.body.responsible,
                token: req.headers.authorization
            }

            const bandBusiness = new BandBusiness()
            await bandBusiness.createBand(input)
            
            res.status(200).send({message: "successfully created"})

        } catch (error) {
            let message: string = error.message || error.sqlMessage

            if(message.includes("jwt malformed")) message = "invalid token format"
            if(message.includes("jwt expired")) message = "Token expired"
        
            res.status(400).send({ error: message });
        }
        await BaseDatabase.destroyConnection()
    }

    async getInfBand(req: Request,res:Response) {
        try {
            const input: GetBandInputDTO = {
                type: req.query.name as string || req.query.id as string,
                token: req.headers.authorization
            }

            const bandBusiness = new BandBusiness()
            const band = await bandBusiness.getInfoBand(input)
            
            res.status(200).send({message: band})

        } catch (error) {
            let message: string = error.message || error.sqlMessage

            if(message.includes("jwt malformed")) message = "invalid token format"
            if(message.includes("jwt expired")) message = "Token expired"
        
            res.status(400).send({ error: message });
        }
        await BaseDatabase.destroyConnection()
    }
}