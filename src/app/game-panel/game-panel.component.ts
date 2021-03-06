import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { WordsPanelComponent } from '../words-panel/words-panel.component';
import { UserServiceService } from '../user-service/user-service.service';

@Component({
  moduleId: module.id,
  selector: 'game-panel',
  templateUrl: 'game-panel.component.html',
  directives: [WordsPanelComponent],
  styleUrls: ['game-panel.component.css']
})

export class GamePanelComponent implements OnInit {

  newPlayer: Player;

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    this.newPlayer = this.userService.getCurrentPlayer();
  }
}
