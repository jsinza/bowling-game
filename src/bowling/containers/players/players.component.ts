import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { GAME_CONFIG } from 'src/bowling/config';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'js-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  form: FormGroup = this.fb.group({
    players: this.fb.array([])
  });

  constructor(private store: Store<fromStore.BowlingState>,
              private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loadPlayers();
  }

  private loadPlayers(): void {
    for (let index = 0; index < GAME_CONFIG.maxPlayers; index++) {
      const player = this.fb.group({ name: ['', [Validators.required]] });
      this.players.push(player);
    }
  }

  get players(): FormArray {
    return this.form.get('players') as FormArray;
  }

  onSubmit(): void {
    this.form.updateValueAndValidity({ onlySelf: false });
    if (this.form.valid) {
      this.players.controls.forEach((control: FormControl) => this.store.dispatch(new fromStore.CreatePlayer((control.get('name').value))));
      this.store.dispatch(new fromStore.StartGame());
      this.router.navigate(['game'], {relativeTo: this.activatedRoute.parent});
    }
  }

}
