import { playerUtils } from './player-utils';
import * as Inmutable from 'immutable';
import { frameUtils } from './frame-utils';


describe('player utils', () => {
  it('should structure player', () => {
    const name = 'sinza';
    const player = playerUtils.create(name);
    expect(player.name).toBe(name);
    expect(player.score).toBe(0);
  });

  it('should reset player', () => {
    let rolls = Inmutable.Map<number, number | null>();
    rolls = rolls.set(1, 10);
    rolls = rolls.set(2, null);
    const name = 'sinza';
    let player = playerUtils.create(name);
    player.score = 100;
    player.frames.set(1, { rolls, sum: 10, score: 4, bonus: 0 });
    player = playerUtils.reset(player);
    expect(player.name).toBe(name);
    expect(player.score).toBe(0);
    expect(player.frames.get(1).bonus).toBe(0);
    expect(player.frames.get(1).score).toBe(0);
    expect(player.frames.get(1).score).toBe(0);
    expect(player.frames.get(1).rolls.toObject()).toMatchObject({ 1: null, 2: null });
  });

  it('should get perfect score', () => {
    const name = 'sinza';
    let player = playerUtils.create(name);
    player = playerUtils.play(player, 10, 1, 1);
    player = playerUtils.play(player, 10, 2, 1);
    player = playerUtils.play(player, 10, 3, 1);
    player = playerUtils.play(player, 10, 4, 1);
    player = playerUtils.play(player, 10, 5, 1);
    player = playerUtils.play(player, 10, 6, 1);
    player = playerUtils.play(player, 10, 7, 1);
    player = playerUtils.play(player, 10, 8, 1);
    player = playerUtils.play(player, 10, 9, 1);
    player = playerUtils.play(player, 10, 10, 1);
    player = playerUtils.play(player, 10, 10, 2);
    player = playerUtils.play(player, 10, 10, 3);

    expect(player.name).toBe(name);
    expect(player.score).toBe(300);
  });
});
