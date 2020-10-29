import {connection} from '../index'
import{formattedDate} from "../utils/utils"

//========== TABLE Actor ===========

export const selectActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE name LIKE "%${name}%";
    `)

    return result[0]
}

export const selectActorById = async (id: string): Promise<any> => {
    const result = await connection("Actor").select("*").where({id})
    return result[0]
}

export const selectAllActor = async (): Promise<any> => {
    const result = await connection.raw(`
            SELECT * FROM Actor;
    `)
    
    return result[0]
}

export const selectQuantityByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) AS "Count of ${gender}" FROM Actor
    WHERE LOWER(gender) = LOWER("${gender}");
    `)
    
    return result[0]
}

export const updateSalary = async (id: string, salary: number ): Promise<number> => {
    const result = await connection('Actor').where({id}).update({salary})
    return result
}

export const deleteActorById = async (id: string ): Promise<number> => {
    const result = await connection('Actor').where({id}).delete()
    return result
}

export const selectAvgSalaryByGender = async (gender: string ): Promise<any> => {
    const result = await connection('Actor')
    .avg("salary as average")
    .where({ gender })
    
    return result[0]
}

export const insertNewActor = async (
    id: string, name:string, salary:number,gender: string, dateOfBirth:string
): Promise<any> => {

    const result = await connection
        .insert({
            id,
            name,
            salary,
            gender,
            birth_date: formattedDate(dateOfBirth)
        })
        .into("Actor")

    return result
}

//========== TABLE Movies ===========
export const insertNewMovie = async (
    id: string, name:string, sinopse:string, release_date: string, rating:number, playing_limit_date:string
): Promise<any> => {

    const result = await connection
        .insert({
            id,
            name,
            sinopse,
            release_date: formattedDate(release_date),
            rating,
            playing_limit_date: formattedDate(playing_limit_date)
        })
        .into("Movies")

    return result
}