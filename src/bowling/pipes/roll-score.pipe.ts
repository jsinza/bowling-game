import { Pipe, PipeTransform } from '@angular/core';
import { Frame } from '../models';
import { frameUtils } from '../utils';
@Pipe({
  name: 'rollScore'
})
export class RollScorePipe implements PipeTransform {

  transform(value: number | null, position: number, frame: Frame): unknown {
    if (value === undefined || value == null || value <= 0) {
      return '-';
    }
    if (frameUtils.isStrike(frame)) {
      return 'X';
    }
    if (position === 2 && frameUtils.isSpare(frame)) {
      return '/';
    }
    return value;
  }

}
