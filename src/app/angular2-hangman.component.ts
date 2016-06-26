import { Component } from '@angular/core';
import { EntryPageComponent } from './entryPage/entryPage.component';

@Component({
  moduleId: module.id,
  selector: 'angular2-hangman-app',
  directives: [EntryPageComponent],
  templateUrl: 'angular2-hangman.component.html',
  styleUrls: ['angular2-hangman.component.css']
})

export class Angular2HangmanAppComponent {

  title = 'he';
}
