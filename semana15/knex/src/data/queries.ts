import {connection} from '../index'

export const selectActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE LOWER(name) = LOWER("${name}");
    `)

    return result[0]
}

export const selectAllAtor = async (): Promise<any> => {
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

export const updateSalary = async (id: string, salary: number ): Promise<any> => {
    const result = await connection
    .insert({salary: salary})
    .where({id: id})

    console.log(result);
    return result
}