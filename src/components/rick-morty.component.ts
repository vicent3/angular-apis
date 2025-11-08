import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickMortyService } from '../services/rick-morty.service';
import { Character } from '../models/rick-morty.model';

@Component({
  selector: 'app-rick-morty',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="api-content">
      <h2>Rick and Morty API</h2>
      <div class="cards-container">
        <div class="card" *ngFor="let character of characters">
          <img [src]="character.image" [alt]="character.name">
          <div class="card-content">
            <h3>{{ character.name }}</h3>
            <p><strong>Status:</strong> {{ character.status }}</p>
            <p><strong>Species:</strong> {{ character.species }}</p>
            <p><strong>Gender:</strong> {{ character.gender }}</p>
            <p><strong>Origin:</strong> {{ character.origin.name }}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class RickMortyComponent implements OnInit {
  characters: Character[] = [];

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.rickMortyService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.results;
      },
      error: (error) => console.error('Error fetching characters:', error)
    });
  }
}
