import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckNorrisService } from '../services/chuck-norris.service';
import { ChuckNorrisJoke } from '../models/chuck-norris.model';

@Component({
  selector: 'app-chuck-norris',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="api-content">
      <h2>Chuck Norris Jokes API</h2>
      <div class="cards-container">
        <div class="card joke-card" *ngIf="joke">
          <img [src]="joke.icon_url" alt="Chuck Norris">
          <div class="card-content">
            <p class="joke-text">{{ joke.value }}</p>
            <button class="btn-new-joke" (click)="getNewJoke()">Get New Joke</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ChuckNorrisComponent implements OnInit {
  joke: ChuckNorrisJoke | null = null;

  constructor(private chuckNorrisService: ChuckNorrisService) {}

  ngOnInit(): void {
    this.getNewJoke();
  }

  getNewJoke(): void {
    this.chuckNorrisService.getRandomJoke().subscribe({
      next: (data) => {
        this.joke = data;
      },
      error: (error) => console.error('Error fetching joke:', error)
    });
  }
}
