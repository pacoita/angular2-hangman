import { Component, Input } from '@angular/core';
import { Player } from '../shared';
import { BestScoresComponent } from '../best-scores/best-scores.component';

@Component({
  moduleId: module.id,
  selector: 'game-panel',
  templateUrl: 'game-panel.component.html',
  directives: [BestScoresComponent],
  styleUrls: ['game-panel.component.css']
})

export class GamePanelComponent {

  @Input()
  newPlayer: Player;

  constructor() {
    console.log('Player: ', this.newPlayer);
  }
}
