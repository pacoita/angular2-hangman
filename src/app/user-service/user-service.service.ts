import { Injectable } from '@angular/core';
import { Player } from '../model/player';

@Injectable()
export class UserServiceService {

  private _player: Player;

  setCurrentPlayer(newPlayer: Player) {
    this._player = newPlayer;
  }

  getCurrentPlayer() {
    return this._player;
  }

}
