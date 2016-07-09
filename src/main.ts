import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2HangmanAppComponent } from './app/angular2-hangman.component';
import { environment } from './app/environment';
import { APP_ROUTER_PROVIDERS } from './app/app-routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2HangmanAppComponent, [ APP_ROUTER_PROVIDERS ]);
