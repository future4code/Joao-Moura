export class Band{
    constructor(
        private id: string,
        private name: string,
        private musicGenre: string,
        private responsible: string
    ){}

    public getID = () => this.id
    public getName = () => this.name
    public getMusicGenre = () => this.musicGenre
    public getResponsible = () => this.responsible

    public setID = (id: string):void => {
        this.id = id
    }
    public setName = (name: string):void => {
        this.name = name
    }
    public setMusicGenre = (musicGenre: string):void => {
        this.musicGenre = musicGenre
    }
    public setResponsible = (responsible: string):void => {
        this.responsible = responsible
    }

    static toBandModel (band: any): Band {
        return new Band(band.id, band.name, band.musicGenre, band.responsible)
    }

}

export interface BandInputDTO {
    name: string,
    musicGenre: string,
    responsible: string,
    token?: string
}