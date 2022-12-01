import { Component } from '@angular/core';

@Component({
  selector: 'app-code-access',
  templateUrl: './code-access.component.html',
  styleUrls: ['./code-access.component.scss']
})
export class CodeAccessComponent {
  code!: string;
  errorMessage: string = '';

  passwordListener(code: string) {
    this.code = code;
  }
}
