import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="container">
      <header>
        <h1>Consumo de APIs en Angular</h1>
       
      </header>
      <nav class="nav-buttons">
        <button routerLink="/rick-morty" routerLinkActive="active" class="nav-btn">
          Rick & Morty
        </button>
        <button routerLink="/ghibli" routerLinkActive="active" class="nav-btn">
          Studio Ghibli
        </button>
        <button routerLink="/open-library" routerLinkActive="active" class="nav-btn">
          Open Library
        </button>
        <button routerLink="/free-to-game" routerLinkActive="active" class="nav-btn">
          simpsons
        </button>
        <button routerLink="/cats" routerLinkActive="active" class="nav-btn">
          Cats
        </button>
        <button routerLink="/dogs" routerLinkActive="active" class="nav-btn">
          Dogs
        </button>
        <button routerLink="/fbi" routerLinkActive="active" class="nav-btn">
          FBI Wanted
        </button>
        <button routerLink="/users" routerLinkActive="active" class="nav-btn">
          User Random
        </button>
        <button routerLink="/store" routerLinkActive="active" class="nav-btn">
          Store
        </button>
      </nav>

      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class App { }

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});
