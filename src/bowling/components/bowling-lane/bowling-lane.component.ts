import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { GAME_CONFIG } from '../../config';
import { triggers } from './trigger';
@Component({
  selector: 'js-bowling-lane',
  templateUrl: './bowling-lane.component.html',
  styleUrls: ['./bowling-lane.component.scss'],
  animations: triggers
})
export class BowlingLaneComponent implements OnInit {

  @Input() color = '#ef3e39';

  fallenPines: number[] = [];

  pines: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  throw = false;

  throwball(value): void {
    for (let index = 0; index < value; index++) {
      this.fallenPines.push(this.pines.splice(this.pines.length * Math.random() | 0, 1)[0]);
    }
    this.throw = true;
  }
  constructor() { }

  ngOnInit(): void {

  }
  captureDoneEvent(event: AnimationEvent): void {
    console.log("sss");
  }

  fallebPin(value): boolean {
    return (value in this.fallenPines);
  }

}
