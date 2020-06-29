import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromGame from './game.reducer';
export interface BowlingState {
  game: fromGame.GameState;
}

export const reducers: ActionReducerMap<BowlingState> = {
  game: fromGame.reducer,
};

export const getBowlingState = createFeatureSelector<BowlingState>(
  'bowling'
);
