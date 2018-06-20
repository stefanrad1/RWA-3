import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { effects } from './indexEffects';

import { AppComponent } from './app.component';
//import { Observable } from 'rxjs/Observable';
import { EffectsModule } from '@ngrx/effects';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState,rootReducer,INITIAL_STATE} from './store';
import { ReceptOverviewComponent } from './recept-overview/recept-overview.component';
import { ReceptiListComponent } from './recepti-list/recepti-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ReceptOverviewComponent,
    ReceptiListComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule,
    //EffectsModule.forFeature(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer,INITIAL_STATE);
  }
}
