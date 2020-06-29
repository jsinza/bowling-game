import { Frame } from '../models';
import { GAME_CONFIG } from '../config';
import * as Inmutable from 'immutable';


function create(): Inmutable.Map<number, Frame> {
  let frames: Inmutable.Map<number, Frame> = Inmutable.Map();
  for (let i = 1; i <= GAME_CONFIG.frameCount; i++) {
    const rollCount = i === GAME_CONFIG.frameCount ? 3 : 2;
    let rolls = Inmutable.Map<number, number | null>();
    for (let j = 1; j <= rollCount; j++) {
      rolls = rolls.set(j, null);
    }
    const frame = { rolls, score: 0, sum: 0, bonus: 0 };
    frames = frames.set(i, frame);
  }
  return frames;
}

function play(frame: Frame, knocked: number, frameIndex: number, rollIndex: number): Frame {

  let rolls = frame.rolls.set(rollIndex, knocked);

  const finished = (_: Inmutable.Map<number, number>) => _.map(roll => roll ? roll : 0);

  const sum = rolls.reduce((acc, roll) => roll ? acc + roll : acc + 0, 0);

  if (frameIndex === GAME_CONFIG.frameCount && rollIndex === 2) {
    if (sum % 10 !== 0) {
      rolls = finished(rolls);
    }
  }
  if (knocked === GAME_CONFIG.pinCount && rollIndex === 1 && !(frameIndex === GAME_CONFIG.frameCount)) {
    rolls = finished(rolls);
  }

  return {
    ...frame,
    rolls,
    sum,
  };
}

function isStrike(frame: Frame): boolean {
  return frame.rolls.get(1) === GAME_CONFIG.pinCount;
}

function isMaxScore(frame: Frame): boolean {
  return frame.sum === GAME_CONFIG.pinCount;
}

function isSpare(frame: Frame): boolean {
  return frame.rolls.get(1) < GAME_CONFIG.pinCount && isMaxScore(frame);
}

function isFinished(frame: Frame): boolean {
  return frame.rolls.find(i => i == null) === undefined;
}

export const frameUtils = {
  isMaxScore,
  isStrike,
  isSpare,
  isFinished,
  create,
  play
};
