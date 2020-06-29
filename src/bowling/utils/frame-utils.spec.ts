import { frameUtils } from './frame-utils';
import { GAME_CONFIG } from '../config';
import * as Inmutable from 'immutable';

describe('frame utils ', () => {

  it('should structure frames', () => {
    const frames = frameUtils.create();
    expect(frames.count()).toBe(GAME_CONFIG.frameCount);
    for (let index = 1; index < GAME_CONFIG.frameCount; index++) {
      const frame = frames.get(index);
      expect(frame).not.toBeUndefined();
      expect(frame).toHaveProperty('score', 0);
      expect(frame).toHaveProperty('sum', 0);
      expect(frame).toHaveProperty('bonus', 0);
      if (index === GAME_CONFIG.frameCount) {
        expect(frame.rolls.count()).toBe(3);
      } else {
        expect(frame.rolls.count()).toBe(2);
      }
    }
  });

  it('should get is isStrike and not isStrike', () => {
    let rolls = Inmutable.Map<number, number | null>();
    rolls = rolls.set(1, 10);
    rolls = rolls.set(2, null);
    expect(frameUtils.isStrike({ rolls, sum: 0, score: 0, bonus: 0 })).toBeTruthy();
    rolls = rolls.set(1, 5);
    rolls = rolls.set(2, 3);
    expect(frameUtils.isStrike({ rolls, sum: 0, score: 0, bonus: 0 })).toBeFalsy();
  });

  it('should get is isFinished and not isFinished', () => {
    let rolls = Inmutable.Map<number, number | null>();
    rolls = rolls.set(1, 10);
    rolls = rolls.set(2, null);
    expect(frameUtils.isFinished({ rolls, sum: 0, score: 0, bonus: 0 })).toBeFalsy();
    rolls = rolls.set(1, 5);
    rolls = rolls.set(2, 3);
    expect(frameUtils.isFinished({ rolls, sum: 0, score: 0, bonus: 0 })).toBeTruthy();
  });

  it('should get is isMaxScore and not isMaxScore', () => {
    const rolls = Inmutable.Map<number, number | null>();
    expect(frameUtils.isMaxScore({ rolls, sum: 10, score: 0, bonus: 0 })).toBeTruthy();

    expect(frameUtils.isMaxScore({ rolls, sum: 6, score: 0, bonus: 0 })).toBeFalsy();
  });

  it('should get is isFinished and not isFinished', () => {
    let rolls = Inmutable.Map<number, number | null>();
    rolls = rolls.set(1, 8);
    rolls = rolls.set(2, 0);
    expect(frameUtils.isSpare({ rolls, sum: 10, score: 0, bonus: 0 })).toBeTruthy();
    rolls = rolls.set(1, 5);
    rolls = rolls.set(2, 3);
    expect(frameUtils.isSpare({ rolls, sum: 5, score: 0, bonus: 0 })).toBeFalsy();
  });

  it('should get is play frame with knocked 10 and roll first', () => {
    let rolls = Inmutable.Map<number, number | null>();
    rolls = rolls.set(1, null);
    rolls = rolls.set(2, null);
    const frame = frameUtils.play({ rolls, sum: 0, score: 0, bonus: 0 }, 10, 1, 1);
    expect(frame.bonus).toBe(0);
    expect(frame.sum).toBe(10);
    expect(frame.score).toBe(0);
    expect(frame.rolls.toObject()).toMatchObject(Inmutable.Map({ 1: 10, 2: 0 }).toObject());
  });

  it('should get is play frame with knocked 10 and roll second', () => {
    let rolls = Inmutable.Map<number, number | null>();
    rolls = rolls.set(1, 5);
    rolls = rolls.set(2, null);
    const frame = frameUtils.play({ rolls, sum: 10, score: 0, bonus: 0 }, 10, 1, 2);
    expect(frame.bonus).toBe(0);
    expect(frame.sum).toBe(15);
    expect(frame.score).toBe(0);
    expect(frame.rolls.toObject()).toMatchObject(Inmutable.Map({ 1: 5, 2: 10 }).toObject());
  });

  it('should get is play last frame with knocked 5 and roll second', () => {
    let rolls = Inmutable.Map<number, number | null>();
    rolls = rolls.set(1, 5);
    rolls = rolls.set(2, null);
    const frame = frameUtils.play({ rolls, sum: 230, score: 0, bonus: 0 }, 10, 10, 2);
    expect(frame.bonus).toBe(0);
    expect(frame.sum).toBe(15);
    expect(frame.score).toBe(0);
    expect(frame.rolls.toObject()).toMatchObject(Inmutable.Map({ 1: 5, 2: 10 }).toObject());
  });

});
