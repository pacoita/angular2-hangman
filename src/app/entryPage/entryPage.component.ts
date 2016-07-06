import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { Player } from '../model/player';
import { UserServiceService } from '../user-service/user-service.service';


@Component({
  moduleId: module.id,
  selector: 'entry-page',
  directives: [BUTTON_DIRECTIVES],
  templateUrl: 'entryPage.component.html',
  styleUrls: ['entryPage.component.css']
})

export class EntryPageComponent {

  player: Player;

  constructor(private router: Router, private userService: UserServiceService){}

  startGame(playerName: string) {
    let name = playerName.trim();

    // TODO: Pass language from entry page
    this.player = new Player(name, null);
    this.userService.setCurrentPlayer(this.player);
    this.router.navigate(['/game']);
  }
}


