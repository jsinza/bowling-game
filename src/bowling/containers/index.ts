import { PlayersComponent } from './players/players.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { ResultsComponent } from './results/results.component';

export const containers: any[] = [
  PlayersComponent, StartComponent, GameComponent, ResultsComponent
];
export * from './players/players.component';
export * from './start/start.component';
export * from './game/game.component';
export * from './results/results.component';
