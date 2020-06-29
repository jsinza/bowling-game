import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromGame from '../reducers/game.reducer';

export const getGameState = createSelector(
  fromFeature.getBowlingState,
  (state: fromFeature.BowlingState) => state.game
);

export const getPlayers = createSelector(
  getGameState,
  fromGame.getPlayers
);
export const getFrameIndex = createSelector(
  getGameState,
  fromGame.getFrameIndex
);
export const getRollIndex = createSelector(
  getGameState,
  fromGame.getRollIndex
);
export const getCurrentPlayer = createSelector(
  getGameState,
  fromGame.getCurrentPlayer
);
export const getCurrentPlayerIndex = createSelector(
  getGameState,
  fromGame.getCurrentPlayerIndex
);
export const getStatus = createSelector(
  getGameState,
  fromGame.getStatus
);
export const getCantPlayer = createSelector(
  getGameState,
  fromGame.getCantPlayer
);


