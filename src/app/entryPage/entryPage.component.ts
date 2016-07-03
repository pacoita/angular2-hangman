import { Component } from '@angular/core';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { Player } from '../model/player';
import { GamePanelComponent } from '../game-panel/game-panel.component';
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'entry-page',
  directives: [BUTTON_DIRECTIVES, GamePanelComponent],
  templateUrl: 'entryPage.component.html',
  styleUrls: ['entryPage.component.css']
})

export class EntryPageComponent {

  constructor(private router: Router){

  }

  player: Player;

  startGame(playerName: string) {
    console.log('Clicked: ', playerName);

    let name = playerName.trim();

    //TODO: Pass proper parameters for HighScore and language
    this.player = new Player(name, null, null);
    this.router.navigate(['/game']);
  }
}


