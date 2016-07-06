import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserServiceService } from './user-service/user-service.service';

@Component({
  moduleId: module.id,
  selector: 'angular2-hangman-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'angular2-hangman.component.html',
  styleUrls: ['angular2-hangman.component.css'],
  providers: [UserServiceService]
})

export class Angular2HangmanAppComponent {
}
