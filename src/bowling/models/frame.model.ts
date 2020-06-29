
import * as Inmutable from 'immutable';

export interface Frame {
  sum: number;
  bonus: number;
  score: number;
  rolls: Inmutable.Map<number, number | null>;
}
