import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatService } from '../services/cat.service';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="api-content">
      <h2>The Cat API</h2>
      <div class="cards-container">
        <div class="card" *ngFor="let cat of cats">
          <img [src]="cat.url" [alt]="'Cat ' + cat.id">
          <div class="card-content">
            <p><strong>ID:</strong> {{ cat.id }}</p>
            <p><strong>Dimensions:</strong> {{ cat.width }} x {{ cat.height }}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CatComponent implements OnInit {
  cats: Cat[] = [];

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getCats().subscribe({
      next: (data) => {
        this.cats = data;
      },
      error: (error) => console.error('Error fetching cats:', error)
    });
  }
}
