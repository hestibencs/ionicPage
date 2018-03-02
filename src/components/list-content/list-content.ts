import { Component } from '@angular/core';

/**
 * Generated class for the ListContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-content',
  templateUrl: 'list-content.html'
})
export class ListContentComponent {

  text: string;

  constructor() {
    console.log('Hello ListContentComponent Component');
    this.text = 'Hello World';
  }

}
