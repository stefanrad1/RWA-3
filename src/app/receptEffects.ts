/*import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as receptAction from '../app/actions';
import * as formService from './receptService';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class receptEffects{
    constructor(private actions$: Actions,private receptService: formService.receptService){}

    load$=this.actions$.ofType(receptAction.ADD_RECEPT)
    .pipe(
        switchMap(()=>{
            return this.receptService.getRecept().pipe(
                map(recepti=>new receptAction.Add_all(recepti))
            )
        })
    )
}