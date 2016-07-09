import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  moduleId: module.id,
  selector: 'words-panel',
  templateUrl: 'words-panel.component.html',
  styleUrls: ['words-panel.component.css']
})
export class WordsPanelComponent implements OnInit {

  constructor() {}

  lettersAvailable: any;

  ngOnInit() {
    this.lettersAvailable = this.initializeLetters('abcdefghijklmnopqrstuvwxyz');
  }

  initializeLetters(letters) {
   return _.map(letters.split(''), function (singleLetter) {
       return { 'name' : singleLetter, 'chosen': false };
    });
  }

}
