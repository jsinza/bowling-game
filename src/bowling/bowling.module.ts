import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store';

// components
import * as fromComponents from './components';

// directives
import * as fromPipes from './pipes';

// containers
import * as fromContainers from './containers';

// guard
import * as fromGuards from './guards';

// services
import * as fromServices from './services';


export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'start' },
  {
    path: 'start',
    component: fromContainers.StartComponent,
  },
  {
    path: 'players',
    component: fromContainers.PlayersComponent,
  },
  {
    path: 'game',
    canActivate: [fromGuards.StartedGameGuard],
    component: fromContainers.GameComponent,
  },
  {
    path: 'results',
    canActivate: [fromGuards.FinishedGameGuard],
    component: fromContainers.ResultsComponent,
  }
];

@NgModule({
  providers: [...fromGuards.guards, ...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components, ...fromPipes.pipes],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('bowling', reducers),
  ]
})
export class BowlingModule { }
