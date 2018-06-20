import { Component, OnInit } from '@angular/core';
import { NgRedux,select } from '@angular-redux/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { IAppState } from '../store';
import { REMOVE_ALL } from '../actions';
import { IRecepti } from '../recept';


export const receptAdapter = createEntityAdapter<IRecepti>();
export interface State extends EntityState<IRecepti> { }

const defaultRecept = {
    ids: ['123'],
    entities: {
        '123': {
          id: 123,
          opis: "pita",
          priprema: "aa",
          vreme: "15",
          minuti: 1,
          sekunde: 1
        }
    }
}

export const initialState: State = receptAdapter.getInitialState(defaultRecept);

@Component({
  selector: 'app-recept-overview',
  templateUrl: './recept-overview.component.html',
  styleUrls: ['./recept-overview.component.css']
})
export class ReceptOverviewComponent implements OnInit {
  @select() recepti;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  clearRecepti()
  {
    this.ngRedux.dispatch({type: REMOVE_ALL})
  }

}
