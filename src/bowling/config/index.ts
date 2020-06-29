export interface GameConfig {
  frameCount: number;
  pinCount: number;
  maxPlayers: number;
}

export const GAME_CONFIG: GameConfig = {
  frameCount: 10,
  pinCount: 10,
  maxPlayers: 2,
};
