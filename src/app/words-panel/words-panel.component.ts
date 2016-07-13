import * as _ from 'underscore';
import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider/data-provider.service';
import { GameLetter } from '../model/game-letter'; 


@Component({
  moduleId: module.id,
  selector: 'words-panel',
  templateUrl: 'words-panel.component.html',
  styleUrls: ['words-panel.component.css']
})

export class WordsPanelComponent implements OnInit {

  constructor(private wordsService: DataProviderService) {}

  secretWord: GameLetter[];
  lettersAvailable: GameLetter[];
  temptativesLeft: number;
  hasWon: boolean;

  ngOnInit() {
    this.lettersAvailable = this.makeLetters('abcdefghijklmnopqrstuvwxyz');    
    this.startNewGame();
  }

  makeLetters(alphabet: string): GameLetter[] {
    return _.map(alphabet.split(''), function (singleLetter) {
        return new GameLetter(singleLetter, false);
      });
  }

  guessWord(selectedLetter: GameLetter): void {
    if(this.temptativesLeft > 0) {
        selectedLetter.chosen = true;
      
      _.each(this.secretWord, (char: GameLetter) => {
          if(selectedLetter.name === char.name) {
              this.revealLetter(char);         
          }

          this.hasWon = _.reduce(this.secretWord, function(iter, letter: GameLetter) {
            return iter && letter.chosen;
          }, true); 
      })

      this.temptativesLeft > 0 ? this.temptativesLeft-- : 0;
    }

    if(this.temptativesLeft === 0) {
      this.showSecretWord();
    }
  }

  showSecretWord(): void {
    _.each(this.secretWord, (char: GameLetter) => {
        this.revealLetter(char);
    });
  }

  startNewGame(): void {
    this.hasWon = false;
    this.secretWord = this.makeLetters(this.wordsService.getGameWord());
    this.temptativesLeft = this.secretWord.length + 3;

    _.each(this.lettersAvailable, (letter: GameLetter) => {
      letter.chosen = false;
    })
  }

  private revealLetter(char: GameLetter): void {
      char.chosen = true;
      char.name = char.name.toUpperCase(); 
  }
}
