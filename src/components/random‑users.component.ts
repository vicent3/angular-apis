import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomUserService } from '../services/random‑user.service';
import { User } from '../models/random‑user.model';

@Component({
    selector: 'app-random-users',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="api-content">
      <h2>Random User API</h2>
      <div *ngIf="!users.length">Cargando usuarios…</div>
      <div class="cards-container" *ngIf="users.length">
        <div class="card" *ngFor="let user of users">
          <img [src]="user.picture.large" [alt]="user.name.first + ' ' + user.name.last">
          <div class="card-content">
            <h3>{{ user.name.first }} {{ user.name.last }}</h3>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Edad:</strong> {{ user.dob.age }}</p>
            <p><strong>Nacionalidad:</strong> {{ user.nat }}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class RandomUsersComponent implements OnInit {
    users: User[] = [];

    constructor(private randomUserService: RandomUserService) { }

    ngOnInit(): void {
        this.randomUserService.getUsers(20).subscribe({
            next: data => {
                this.users = data.results;
            },
            error: err => console.error('Error fetching users:', err)
        });
    }
}
