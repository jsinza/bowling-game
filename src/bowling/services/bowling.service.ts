import { Injectable } from '@angular/core';
import { GAME_CONFIG } from '../config';

@Injectable()
export class BowlingService {

  public throwBall(knocked: number): number {
    if (knocked === GAME_CONFIG.pinCount) {
      return 0;
    }
    const max = GAME_CONFIG.pinCount - knocked;
    return Math.floor(Math.random() * max) + 1;
  }
}
