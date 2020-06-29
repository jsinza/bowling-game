import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { STATUS } from '../enums';

@Injectable()
export class FinishedGameGuard implements CanActivate {
  constructor(private store: Store<fromStore.BowlingState>, private router: Router) { }
  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select(fromStore.getStatus).pipe(map((val) => {
      if (val === STATUS.FINISHED) {
        return true;
      } else {
        return this.router.parseUrl('bowling/game');
      }
    }
    ));
  }

}
