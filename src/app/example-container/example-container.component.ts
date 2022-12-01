import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-container',
  templateUrl: './example-container.component.html',
  styleUrls: ['./example-container.component.scss']
})
export class ExampleContainerComponent implements OnInit {
  errorMessage: string = 'Erreur 01';

  ngOnInit() {
    // Traitement lors de l'initiation du composant 
    this.validate();
  }

  constructor() {

  }

  validate() {
    // traitement if ... etc.
    this.errorMessage = 'Erreur 02';
  }

}
