import { Frame } from './frame.model';
import * as Inmutable from 'immutable';

export interface Player {
  name: string;
  frames: Inmutable.Map<number, Frame>;
  score: number;
  color: string;
}
