import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, AbstractControlDirective} from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent{

  private static readonly errorMessages = {
    required: () => 'This field is required',
    minlength: (params) => 'The min number of characters is ' + params.requiredLength,
    maxlength: (params) => 'The max allowed number of characters is ' + params.requiredLength,
    pattern: (params) => 'The required pattern is: ' + params.requiredPattern,
    uniqueName: (params) => params.message
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }

}
