import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'angular2-hangman-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'angular2-hangman.component.html',
  styleUrls: ['angular2-hangman.component.css']
})

export class Angular2HangmanAppComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(){
      this.router.navigate(['/home']);
  }
}
