/*import { IRecepti } from './recept';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class receptService{
    constructor(private http: HttpClient){}

    getRecept():Observable<IRecepti[]>{
        return this.http.get<IRecepti[]>('receti')
        .pipe(catchError((error: any)=> Observable.throw(error.json)));
    }

    addRecept(recept: IRecepti):Observable<IRecepti>{
        return this.http.post<IRecepti>('receti',recept)
        .pipe(catchError((error: any)=> Observable.throw(error.json)));
    }
}
