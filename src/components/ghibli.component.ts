import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhibliService } from '../services/ghibli.service';
import { GhibliFilm } from '../models/ghibli.model';

@Component({
  selector: 'app-ghibli',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="api-content">
      <h2>Studio Ghibli API</h2>
      <div class="cards-container">
        <div class="card" *ngFor="let film of films">
          <img [src]="film.image" [alt]="film.title">
          <div class="card-content">
            <h3>{{ film.title }}</h3>
            <p><strong>Director:</strong> {{ film.director }}</p>
            <p><strong>Release Date:</strong> {{ film.release_date }}</p>
            <p><strong>RT Score:</strong> {{ film.rt_score }}</p>
            <p class="description">{{ film.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class GhibliComponent implements OnInit {
  films: GhibliFilm[] = [];

  constructor(private ghibliService: GhibliService) {}

  ngOnInit(): void {
    this.ghibliService.getFilms().subscribe({
      next: (data) => {
        this.films = data;
      },
      error: (error) => console.error('Error fetching films:', error)
    });
  }
}
