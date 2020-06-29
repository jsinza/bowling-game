import { StartedGameGuard } from './started-game.guard';
import { FinishedGameGuard } from './finished-game.guard';

export const guards: any[] = [StartedGameGuard, FinishedGameGuard];

export * from './started-game.guard';
export * from './finished-game.guard';
