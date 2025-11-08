import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpsonsApiService } from '../services/simpsons-api.service';
import { SimpsonCharacter } from '../models/simpson-character.model';

@Component({
  selector: 'app-simpsons-characters',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="api-content">
      <h2>Simpsons Characters</h2>
      <div *ngIf="!characters.length">Cargando personajes…</div>
      <div class="cards-container" *ngIf="characters.length">
        <div class="card" *ngFor="let char of characters">
         <img *ngIf="char.image_path" [src]="'https://thesimpsonsapi.com' + char.image_path" [alt]="char.name">

          <div class="card-content">
            <h3>{{ char.name }}</h3>
            <p><strong>Ocupación:</strong> {{ char.occupation }}</p>
            <p><strong>Edad:</strong> {{ char.age }}</p>
            <p class="description">
              <strong>Frases Clásicas:</strong> {{ char.phrases.join(' · ') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SimpsonsCharactersComponent implements OnInit {
  characters: SimpsonCharacter[] = [];

  constructor(private apiService: SimpsonsApiService) { }

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe({
      next: (data: any) => {
        console.log(data); // opcional: para verificar la respuesta
        this.characters = data.results ? data.results.slice(0, 20) : [];
      },
      error: (err) => console.error('Error fetching characters:', err)
    });
  }


}
