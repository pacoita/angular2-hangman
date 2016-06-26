import { Component, EventEmitter, Output } from '@angular/core';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'entry-page',
  directives: [BUTTON_DIRECTIVES],
  templateUrl: 'entryPage.component.html',
  styleUrls: ['entryPage.component.css']
})

export class EntryPageComponent {

  @Output()
  start = new EventEmitter();

  startGame(playerName) {
    let name = playerName.value;
    this.start.emit(name);
  }
}


