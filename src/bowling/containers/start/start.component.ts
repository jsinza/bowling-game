import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'js-start',
  template: `
   <div class="start">
    <button class="start__button" (click)="onStart()">New Game</button>
  </div>
  `,
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private store: Store<fromStore.BowlingState>, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onStart(): void {
    this.router.navigate(['players'], {relativeTo: this.activatedRoute.parent});
  }

}
