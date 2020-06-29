import { Component } from '@angular/core';

@Component({
  selector: 'js-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <div class="app__header">
      <img src="/assets/svg/bowling.svg" class="app__logo">
      <h1 class="app__title">BOWLING 2D</h1>
    </div>
    <div class="app__content">
      <div class="app__container">
        <router-outlet></router-outlet>
      </div>
      <div class="app__footer">
        <p>&copy; thepublicgroup</p>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent {}
