import { provideRouter, RouterConfig } from '@angular/router';
import { EntryPageComponent } from './entryPage/entryPage.component';
import { GamePanelComponent } from './game-panel/game-panel.component';

export const routes: RouterConfig = [
  { path:"", component: EntryPageComponent },
  { path:"home", component: EntryPageComponent },
  { path:"game", component: GamePanelComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
