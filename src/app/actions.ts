import { IRecepti } from './recept';

export const ADD_RECEPT="ADD RECEPT";
export const ADD_RECEPT_SUCCESS="ADD_RECEPT_SUCCESS";
export const REMOVE_RECEPT="REMOVE RECEPT";
export const TOOGLE_RECEPT="TOOGLE_RECEPT";
export const REMOVE_ALL="REMOVE_ALL";

export class Add {
    readonly type = ADD_RECEPT;
    constructor(public Recept: IRecepti) { }
}

export class Add_all {
    readonly type = ADD_RECEPT_SUCCESS;
    constructor(public Recept: IRecepti[]) { }
}

export class Remove {
    readonly type = REMOVE_RECEPT;
    constructor(public id: string) { }
}