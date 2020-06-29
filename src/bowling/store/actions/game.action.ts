import { Action } from '@ngrx/store';

export const CREATE_PLAYER = '[Game] Create player';

export const NEXT_PLAYER = '[Game] next player';

export const THROWING_BALL = '[Game] throwing ball';

export const RESET_GAME = '[Game] reset game';

export const FINISH_GAME = '[Game] finish game';

export const END_GAME = '[Game] end game';

export const START_GAME = '[Game] start game';


export class CreatePlayer implements Action {
  readonly type = CREATE_PLAYER;
  constructor(public payload: string) { }
}

export class ResetGame implements Action {
  readonly type = RESET_GAME;
  constructor() { }
}

export class FinishGame implements Action {
  readonly type = FINISH_GAME;
  constructor() { }
}

export class NextPlayer implements Action {
  readonly type = NEXT_PLAYER;
  constructor() { }
}
export class EndGame implements Action {
  readonly type = END_GAME;
  constructor() { }
}

export class StartGame implements Action {
  readonly type = START_GAME;
  constructor() { }
}

export class ThrowingBall implements Action {
  readonly type = THROWING_BALL;
  constructor(public payload: number) { }
}


export type GameAction =
  | CreatePlayer
  | NextPlayer
  | ResetGame
  | StartGame
  | FinishGame
  | EndGame
  | ThrowingBall
  ;
