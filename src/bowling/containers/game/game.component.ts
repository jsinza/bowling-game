import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, from, Subscription } from 'rxjs';
import { Player, Frame } from 'src/bowling/models';
import * as Inmutable from 'immutable';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Router, ActivatedRoute } from '@angular/router';
import { BowlingService } from '../../services/bowling.service';
import { tap } from 'rxjs/operators';
import { frameUtils } from 'src/bowling/utils';
import { GAME_CONFIG } from 'src/bowling/config';
import { BowlingLaneComponent } from 'src/bowling/components/bowling-lane/bowling-lane.component';

@Component({
  selector: 'js-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  players$: Observable<Inmutable.Map<number, Player>>;

  cantPlayers: number;

  currentPlayerIndex: number;

  currentPlayer: Player;

  frameIndex: number;

  cantPlayersSubcription: Subscription;

  currentPlayerSubcription: Subscription;

  frameIndexSubcription: Subscription;

  currentPlayerIndexSubcription: Subscription;


  constructor(private store: Store<fromStore.BowlingState>,
    private bowlingService: BowlingService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.players$ = this.store.select(fromStore.getPlayers);
    this.cantPlayersSubcription = this.store.select(fromStore.getCantPlayer).subscribe((val) => this.cantPlayers = val);
    this.currentPlayerIndexSubcription = this.store.select(fromStore.getCurrentPlayerIndex).subscribe((val) => this.currentPlayerIndex = val);
    this.frameIndexSubcription = this.store.select(fromStore.getFrameIndex).subscribe((val) => this.frameIndex = val);
    this.currentPlayerSubcription = this.store.select(fromStore.getCurrentPlayer).subscribe((val) => {
      this.currentPlayer = val;
      this.isFinished();
    });
  }

  throwBall(): void {
    const knockedBefore = this.currentPlayer.frames.get(this.frameIndex).sum;
    const knocked = this.bowlingService.throwBall(knockedBefore);
    this.store.dispatch(new fromStore.ThrowingBall(knocked));
  }

  isFinished(): void {
    if (this.currentPlayer && frameUtils.isFinished(this.currentPlayer.frames.get(this.frameIndex))) {
      if (this.cantPlayers === this.currentPlayerIndex && this.frameIndex === GAME_CONFIG.frameCount) {
        this.store.dispatch(new fromStore.FinishGame());
        this.router.navigate(['results'], { relativeTo: this.activatedRoute.parent });
      } else {
        this.store.dispatch(new fromStore.NextPlayer());
      }
    }
  }

  ngOnDestroy(): void {
    this.cantPlayersSubcription && this.cantPlayersSubcription.unsubscribe();
    this.frameIndexSubcription && this.frameIndexSubcription.unsubscribe();
    this.currentPlayerIndexSubcription && this.currentPlayerIndexSubcription.unsubscribe();
    this.currentPlayerSubcription && this.currentPlayerSubcription.unsubscribe();
  }

}
