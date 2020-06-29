import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroupDirective, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'js-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss'],
})
export class MessageErrorComponent implements OnInit, OnDestroy {

  private _submitted: boolean;

  private control: AbstractControl;

  private formStatusChangeObserver: Subscription;

  private controlStatusChangeObserver: Subscription;

  @HostBinding('style.display')
  get display(): string {
    return this.hasError ? 'flex' : 'none';
  }

  @Input() formControl: FormControl;

  @Input() controlName: string;

  @Input()
  set submitted(value: boolean) {
    this._submitted = value;
    this.setControlValidity();
  }

  get submitted(): boolean {
    return this._submitted;
  }

  get message(): string {
    return this.hasError && this.getMessage();
  }

  hasError = false;

  private get formSubmitted(): boolean {
    return this.form.submitted || this.submitted;
  }

  constructor(private form: FormGroupDirective) {
  }

  private setControlValidity(): void {
    if (this.control) {
      this.hasError = (!this.control.pristine && this.control.errors != null) ||
        (this.control.pristine && this.formSubmitted) ||
        (this.control.touched && this.control.errors != null);
    }
  }

  private getMessage(): string {
    const errors = Object.keys(this.control.errors || {});
    const error = errors.length ? errors[0] : null;
    return error;
  }

  ngOnInit(): void {
    if (!this.controlName) {
      throw new Error('Control name is required');
    }
    this.control = this.formControl ? this.formControl.get(this.controlName) : this.form.control.get(this.controlName);
    const formGroup = this.form.form;
    this.formStatusChangeObserver = formGroup.statusChanges.subscribe(() => {
      this.setControlValidity();
    });
    this.controlStatusChangeObserver = this.control.statusChanges.subscribe((v) => {
      this.setControlValidity();
    });
  }

  ngOnDestroy(): void {
    this.formStatusChangeObserver.unsubscribe();
    this.controlStatusChangeObserver.unsubscribe();
  }

}
