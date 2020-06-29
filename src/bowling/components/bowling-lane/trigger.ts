import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
export const triggers = [
  trigger('ballThrow', [
    state('throw', style({
    })),
    transition('* => throw', [
      animate('8s linear', keyframes([
        style({ transform: 'rotate(1440deg)', left: '970px', offset: 0.33 }),
        style({ transform: 'rotate(2880deg)', left: '1570px', offset: 0.66 }),
        style({ transform: 'rotate(4320deg)', left: '2170px', offset: 1.0 }),
      ]))
    ])
  ]),
  trigger('pin1', [
    state('standing', style({
    })),
    state('overthrow', style({
      display: 'none'
    })),
    transition('standing => overthrow', [
      animate('2s 3.2s linear', keyframes([
        style({ transform: 'rotate(-720deg)', top: '25px', left: '250px', offset: 0.5 }),
        style({ transform: 'rotate(-785deg)', top: '50px', left: '200px', offset: 1.0 }),
      ]))
    ])
  ]),
  trigger('pin2', [
    state('standing', style({
    })),
    state('overthrow', style({
      display: 'none'
    })),
    transition('standing => overthrow', [
      animate('2s 3.4s linear', keyframes([
        style({ transform: 'rotate(-632deg)', top: '50px', left: '90px', offset: 0.5 }),
        style({ transform: 'rotate(-1252deg)', top: '80px', left: '180px', offset: 1.0 }),
      ]))
    ])
  ]),
  trigger('pin3', [
    state('standing', style({
    })),
    state('overthrow', style({
      display: 'none'
    })),
    transition('standing => overthrow', [
      animate('2s 3.4s linear', keyframes([
        style({ transform: 'rotate(-951deg)', top: '50px', left: '200px', offset: 0.5 }),
        style({ transform: 'rotate(-1462deg)', top: '80px', left: '420px', offset: 1.0 }),
      ]))
    ])
  ]),
  trigger('pin4', [
    state('standing', style({
    })),
    state('overthrow', style({
      display: 'none'
    })),
    transition('standing => overthrow', [
      animate('2s 3.6s linear', keyframes([
        style({ transform: 'rotate(-851deg)', bottom: '100px', left: '200px', offset: 0.5 }),
        style({ transform: 'rotate(-1762deg)', bottom: '200px', left: '300px', offset: 1.0 }),
      ]))
    ])
  ]),
  trigger('pin5', [
    state('standing', style({
    })),
    state('overthrow', style({
      display: 'none'
    })),
    transition('standing => overthrow', [
      animate('2s 3.6s linear', keyframes([
        style({ transform: 'rotate(-641deg)', bottom: '100px', left: '200px', offset: 0.5 }),
        style({ transform: 'rotate(-1700deg)', bottom: '200px', left: '340px', offset: 1.0 }),
      ]))
    ])
  ]),
  trigger('pin6', [
    state('standing', style({
    })),
    state('overthrow', style({
      display: 'none'
    })),
    transition('standing => overthrow', [
      animate('2s 3.6s linear', keyframes([
        style({ transform: 'rotate(-842deg)', bottom: '290px', left: '150px', offset: 0.5 }),
        style({ transform: 'rotate(-931deg)', bottom: '325px', left: '220px', offset: 1.0 }),
      ]))
    ])
  ]),
  trigger('pin7', [
    state('standing', style({
    })),
    state('overthrow', style({
      display: 'none'
    })),
    transition('standing => overthrow', [
      animate('2s 3.8s linear', keyframes([
        style({ transform: 'rotate(-321deg)', bottom: '240px', left: '150px', offset: 0.5 }),
        style({ transform: 'rotate(-612deg)', bottom: '210px', left: '220px', offset: 1.0 }),
      ]))
    ])
  ]),
  trigger('pin8', [
    state('standing', style({
    })),
    state('overthrow', style({
      display: 'none'
    })),
    transition('standing => overthrow', [
      animate('2s 3.8s linear', keyframes([
        style({ transform: 'rotate(-641deg)', bottom: '240px', left: '240px', offset: 0.5 }),
        style({ transform: 'rotate(-728deg)', bottom: '210px', left: '370px', offset: 1.0 }),
      ]))
    ])
  ]),
  trigger('pin9', [
    state('standing', style({
    })),
    state('overthrow', style({
      display: 'none'
    })),
    transition('standing => overthrow', [
      animate('2s 3.8s linear', keyframes([
        style({ transform: 'rotate(-641deg)', bottom: '500px', left: '240px', offset: 0.5 }),
        style({ transform: 'rotate(-728deg)', bottom: '652px', left: '420px', offset: 1.0 }),
      ]))
    ])
  ]),
  trigger('pin10', [
    state('standing', style({
    })),
    state('overthrow', style({
      display: 'none'
    })),
    transition('standing => overthrow', [
      animate('2s 3.8s linear', keyframes([
        style({ transform: 'rotate(-1121deg)', bottom: '570px', left: '500px', offset: 0.5 }),
        style({ transform: 'rotate(-1641deg)', bottom: '595px', left: '700px', offset: 1.0 }),
      ]))
    ])
  ])
];
