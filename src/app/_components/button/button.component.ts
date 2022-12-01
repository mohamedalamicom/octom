import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() name: string = '';
  @Output() clickEmitter: EventEmitter<any|null> = new EventEmitter<any|null>();

  constructor() {
  }

}
