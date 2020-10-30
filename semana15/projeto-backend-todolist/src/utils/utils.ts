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