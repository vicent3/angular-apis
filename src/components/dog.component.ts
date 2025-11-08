import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogService } from '../services/dog.service';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="api-content">
      <h2>Dog CEO API</h2>
      <div class="cards-container">
        <div class="card" *ngFor="let dogUrl of dogImages">
          <img [src]="dogUrl" alt="Random Dog">
          <div class="card-content">
            <p>Random Dog Image</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DogComponent implements OnInit {
  dogImages: string[] = [];

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.dogService.getRandomDogImages().subscribe({
      next: (data) => {
        if (Array.isArray(data.message)) {
          this.dogImages = data.message;
        }
      },
      error: (error) => console.error('Error fetching dogs:', error)
    });
  }
}
