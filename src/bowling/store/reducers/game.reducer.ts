import { Player, Frame } from '../../models';
import * as fromGame from '../actions';
import { STATUS } from '../../enums';
import { playerUtils } from '../../utils';
import * as Inmutable from 'immutable';

export interface GameState {
  players: Inmutable.Map<number, Player>;
  frameIndex: number;
  status: STATUS;
  rollIndex: number;
  currentPlayer: Player;
  currentPlayerIndex: number;
  cantPlayer: number;
}

export const initialState: GameState = {
  players: Inmutable.Map(),
  frameIndex: 0,
  status: STATUS.NOT_STARTED,
  rollIndex: 0,
  cantPlayer: 0,
  currentPlayer: null,
  currentPlayerIndex: 0
};

export function reducer(
  state = initialState,
  action: fromGame.GameAction
): GameState {
  switch (action.type) {

    case fromGame.CREATE_PLAYER: {
      const name = action.payload;
      const cantPlayer = state.cantPlayer + 1;
      const player = playerUtils.create(name);
      const players = state.players.set(cantPlayer, player);
      return {
        ...state,
        players,
        cantPlayer
      };
    }

    case fromGame.NEXT_PLAYER: {
      const currentPlayerIndex = state.currentPlayerIndex + 1 > state.cantPlayer ? 1 : state.currentPlayerIndex + 1;
      const frameIndex = currentPlayerIndex === 1 ? state.frameIndex + 1 : state.frameIndex;
      const currentPlayer = state.players.get(currentPlayerIndex);
      const rollIndex = 1;
      return {
        ...state,
        currentPlayerIndex,
        currentPlayer,
        frameIndex,
        rollIndex
      };
    }

    case fromGame.THROWING_BALL: {
      const knocked = action.payload;
      const { currentPlayer, currentPlayerIndex, frameIndex, rollIndex } = state;
      const player = playerUtils.play(currentPlayer, knocked, frameIndex, rollIndex);
      const players = state.players.set(currentPlayerIndex, player);
      const currentPlayerNew = players.get(currentPlayerIndex);
      return {
        ...state,
        players,
        currentPlayer: currentPlayerNew,
        rollIndex: rollIndex + 1
      };
    }

    case fromGame.RESET_GAME: {
      const cantPlayer = state.cantPlayer;
      const players = state.players.map((player) => playerUtils.reset(player));
      return {
        ...initialState,
        players,
        status:STATUS.IN_PROGRESS,
        cantPlayer,
      };
    }

    case fromGame.END_GAME: {
      return { ...initialState };
    }

    case fromGame.FINISH_GAME: {
      return { ...state, status: STATUS.FINISHED };
    }

    case fromGame.START_GAME: {
      const currentPlayerIndex = 1;
      const frameIndex = 1;
      const rollIndex = 1;
      const currentPlayer = state.players.get(currentPlayerIndex);
      return {
        ...state,
        status: STATUS.IN_PROGRESS,
        currentPlayerIndex,
        currentPlayer,
        frameIndex,
        rollIndex
      };
    }

  }
  return state;
}
export const getPlayers = (state: GameState) => state.players;
export const getRollIndex = (state: GameState) => state.rollIndex;
export const getStatus = (state: GameState) => state.status;
export const getFrameIndex = (state: GameState) => state.frameIndex;
export const getCantPlayer = (state: GameState) => state.cantPlayer;
export const getCurrentPlayer = (state: GameState) => state.currentPlayer;
export const getCurrentPlayerIndex = (state: GameState) => state.currentPlayerIndex;

