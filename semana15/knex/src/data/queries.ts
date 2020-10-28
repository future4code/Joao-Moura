import {connection} from '../index'

export const selectActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE name LIKE "%${name}%";
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