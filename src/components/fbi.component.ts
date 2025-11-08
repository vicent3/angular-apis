import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FBIService } from '../services/fbi.service';
import { FBIWanted } from '../models/fbi.model';

@Component({
  selector: 'app-fbi',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="api-content">
      <h2>FBI Wanted API</h2>
      <div class="cards-container">
        <div class="card" *ngFor="let wanted of wantedList">
          <img
            [src]="wanted.images && wanted.images.length > 0 ? wanted.images[0].thumb : 'https://via.placeholder.com/150x200?text=No+Image'"
            [alt]="wanted.title">
          <div class="card-content">
            <h3>{{ wanted.title }}</h3>
            <p *ngIf="wanted.subjects"><strong>Subjects:</strong> {{ wanted.subjects[0] }}</p>
            <p *ngIf="wanted.sex"><strong>Sex:</strong> {{ wanted.sex }}</p>
            <p *ngIf="wanted.nationality"><strong>Nationality:</strong> {{ wanted.nationality }}</p>
            <p *ngIf="wanted.reward_text" class="reward">{{ wanted.reward_text }}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FBIComponent implements OnInit {
  wantedList: FBIWanted[] = [];

  constructor(private fbiService: FBIService) {}

  ngOnInit(): void {
    this.fbiService.getWantedList().subscribe({
      next: (data) => {
        this.wantedList = data.items.slice(0, 20);
      },
      error: (error) => console.error('Error fetching FBI wanted list:', error)
    });
  }
}
