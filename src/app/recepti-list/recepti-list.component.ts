import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';

import { ADD_RECEPT,REMOVE_RECEPT,TOOGLE_RECEPT } from '../actions';
import { IRecepti } from '../recept';

@Component({
  selector: 'app-recepti-list',
  templateUrl: './recepti-list.component.html',
  styleUrls: ['./recepti-list.component.css']
})
export class ReceptiListComponent implements OnInit {
  @select() recepti;

  model: IRecepti = {
    id: 0,
    opis: "",
    priprema: "",
    vreme: "",
    sekunde: 5,
    minuti: 5
  }

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {}

  //tajmer(){this.model.vreme=Observable.interval(1000).subscribe(x=>console.log(x);}

  onSubmit(){
    this.ngRedux.dispatch({type: ADD_RECEPT, recept: this.model});
  }

  toogleRecept(recept){
    this.ngRedux.dispatch({type: TOOGLE_RECEPT, id: recept.id});
  }

  removeRecept(recept){
    this.ngRedux.dispatch({type: REMOVE_RECEPT, id: recept.id});
  }
}
