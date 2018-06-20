import {IRecepti} from "./recept";
import {ADD_RECEPT,ADD_RECEPT_SUCCESS,REMOVE_RECEPT,REMOVE_ALL,TOOGLE_RECEPT} from './actions';

export interface IAppState {
    recepti: IRecepti[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    recepti: [],
    lastUpdate: null
}

export function rootReducer(state,action){
    switch(action.type){

        case ADD_RECEPT:
                action.recept.id=state.recepti.length + 1;
                return Object.assign({},state, {
                    recepti: state.recepti.concat(Object.assign({},action.recept)),
                    lastUpdate: new Date()
                });

        case ADD_RECEPT_SUCCESS:
        for(let x in action){
                action.recept.id=state.recepti.length + 1;
                return Object.assign({},state, {
                    recepti: state.recepti.concat(Object.assign({},action.recept)),
                    lastUpdate: new Date()
                });
            }

        case TOOGLE_RECEPT:
                var recept=state.recepti.find(t => t.id === action.id);
                var indeks=state.recepti.indexOf(recept);
                return Object.assign({},state, {
                    recepti:[
                        ...state.recepti.slice(0,indeks),
                        Object.assign({},state,{gotovo: !recept.gotovo}),
                        ...state.recepti.slice(indeks+1)
                    ],
                    lastUpdate: new Date()
                })

        case REMOVE_RECEPT:
                return Object.assign({},state,{
                    recepti: state.recepti.filter(t => t.id !== action.id),
                    lastUpdate: new Date()
                })

        case REMOVE_ALL:
                return Object.assign({},{
                    recepti: [],
                    lastUpdate: new Date()
                })
                
    }
    return state;
}