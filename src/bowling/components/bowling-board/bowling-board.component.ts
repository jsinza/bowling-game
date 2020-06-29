import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models';
import { GAME_CONFIG } from '../../config';
import * as Inmutable from 'immutable';

@Component({
  selector: 'js-bowling-board',
  templateUrl: './bowling-board.component.html',
  styleUrls: ['./bowling-board.component.scss']
})
export class BowlingBoardComponent implements OnInit {

  @Input() players: Inmutable.Map<number, Player>;

  @Input() currentPlayer: number;

  frameCount = GAME_CONFIG.frameCount;

  constructor() { }

  ngOnInit(): void {

  }

}
