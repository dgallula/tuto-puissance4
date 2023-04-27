export enum PlayerColor{
    RED= 'REd',
    YELLOW= 'YELLOW', 
}

export type Player ={
    id: string,
    name:string,
    color?: PlayerColor 
}

