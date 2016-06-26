import { Component, OnInit } from '@angular/core';
import { Player } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'game-panel',
  templateUrl: 'game-panel.component.html',
  styleUrls: ['game-panel.component.css']
})
export class GamePanelComponent implements OnInit {

  public currentPlayer: Player;

  constructor() {}

  ngOnInit() {}
}
