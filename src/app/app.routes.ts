import { Routes } from '@angular/router';
import { RickMortyComponent } from '../components/rick-morty.component';
import { ChuckNorrisComponent } from '../components/chuck-norris.component';
import { GhibliComponent } from '../components/ghibli.component';
import { OpenLibraryComponent } from '../components/open-library.component';
import { SimpsonsCharactersComponent } from '../components/simpson-character.component';
import { CatComponent } from '../components/cat.component';
import { DogComponent } from '../components/dog.component';
import { FBIComponent } from '../components/fbi.component';
import { RandomUsersComponent } from '../components/random‑users.component';
import { FakeStoreComponent } from '../components/fake-store.component';

export const routes: Routes = [
  { path: '', redirectTo: '/rick-morty', pathMatch: 'full' },
  { path: 'rick-morty', component: RickMortyComponent },
  // { path: 'chuck-norris', component: ChuckNorrisComponent },
  { path: 'ghibli', component: GhibliComponent },
  { path: 'open-library', component: OpenLibraryComponent },
  { path: 'free-to-game', component: SimpsonsCharactersComponent },
  { path: 'cats', component: CatComponent },
  { path: 'dogs', component: DogComponent },
  { path: 'fbi', component: FBIComponent },
  { path: 'users', component: RandomUsersComponent },
  { path: 'store', component: FakeStoreComponent }
];
