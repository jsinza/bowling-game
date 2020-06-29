import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as Inmutable from 'immutable';
import { Player } from 'src/bowling/models';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'js-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  players$: Observable<Inmutable.Map<number, Player>>;

  constructor(private store: Store<fromStore.BowlingState>,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.players$ = this.store.select(fromStore.getPlayers);
  }

  onRestart(): void {
    this.store.dispatch(new fromStore.ResetGame());
    this.router.navigate(['game'], { relativeTo: this.activatedRoute.parent });
  }

  onExit(): void {
    this.router.navigate(['start'], { relativeTo: this.activatedRoute.parent });
  }

}
