export enum  STATUS {
    "TODO" = "To_Do",
    "DOING" = "Doing",
    "DONE" = "Done"
}

export type user = {
    id: number,
    name: string, 
    nickname: string,
    email: string,
}

export type task = {
    id: number,
    title: string, 
    limitDate: string,
    creatorUserId: string,
    status: STATUS
}

export const formattedDate = (date: string): Date =>{
    const [dd, mm, yyyy] = date.split("/")
    const newDate: Date = new Date(`${yyyy}-${mm}-${dd}`) 

    return newDate
}