import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'js-input-form-container',
  templateUrl: './input-form-container.component.html',
  styleUrls: ['./input-form-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputFormContainerComponent {
  @Input() icon: string;
  @Input() reverse = false;
}
