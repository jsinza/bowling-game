import { Player, Frame } from '../models';
import { frameUtils } from './frame-utils';
import * as Inmutable from 'immutable';
import { GAME_CONFIG } from '../config';


function create(name: string): Player {
  const frames = frameUtils.create();
  const color = randomColor();
  const player: Player = {
    name,
    frames,
    color,
    score: 0
  };
  return player;
}

function reset(player: Player): Player {
  const frames = frameUtils.create();
  return { ...player, frames, score: 0 };
}

function play(player: Player, knocked: number,
  // tslint:disable-next-line: align
  frameIndex: number, rollindex: number): Player {
  const newPlayer = { ...player };
  let frame = newPlayer.frames.get(frameIndex);
  frame = frameUtils.play(frame, knocked, frameIndex, rollindex);
  newPlayer.frames = newPlayer.frames.set(frameIndex, frame);
  return calc(newPlayer);
}

function calc(player: Player): Player {
  let frames: Inmutable.Map<number, Frame> = player.frames;
  let score = 0;

  for (let i = 1; i <= GAME_CONFIG.frameCount; i++) {

    const frame = { ...frames.get(i) };

    if (frameUtils.isFinished(frame)) {

      if (frameUtils.isMaxScore(frame)) {
        const firstFrame = frames.get(i + 1);
        const secondFrame = frames.get(i + 2);

        let firstValue = 0;
        let secondValue = 0;

        if (firstFrame) {
          firstValue = firstFrame.rolls.get(1) || 0;

          if (frameUtils.isStrike(frame)) {
            if (!frameUtils.isStrike(firstFrame)) {
              secondValue = firstFrame.rolls.get(2) || 0;
            }
            else if (secondFrame) {
              secondValue = secondFrame.rolls.get(1) || 0;
            }
          }
        }
        frame.bonus = firstValue + secondValue;
      }
      if (GAME_CONFIG.frameCount === i && frame.rolls.get(2) === GAME_CONFIG.pinCount && frame.rolls.get(3) === GAME_CONFIG.pinCount) {
        frame.bonus = frame.rolls.get(2);
      }

      score += frame.sum + frame.bonus;
      frame.score = score;
    }
    frames = frames.set(i, frame);
  }
  return {
    ...player,
    score,
    frames,
  };

}

function randomColor(): string {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  return 'rgb(' + x + ',' + y + ',' + z + ')';
}

export const playerUtils = {
  create,
  reset,
  play
};
