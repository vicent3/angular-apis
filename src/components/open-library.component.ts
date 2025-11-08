import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenLibraryService } from '../services/open-library.service';
import { Book } from '../models/open-library.model';

@Component({
  selector: 'app-open-library',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="api-content">
      <h2>Open Library API</h2>
      <div class="cards-container">
        <div class="card" *ngFor="let book of books">
          <img
            [src]="book.cover_i ? 'https://covers.openlibrary.org/b/id/' + book.cover_i + '-M.jpg' : 'https://via.placeholder.com/150x200?text=No+Cover'"
            [alt]="book.title">
          <div class="card-content">
            <h3>{{ book.title }}</h3>
            <p *ngIf="book.author_name"><strong>Author:</strong> {{ book.author_name[0] }}</p>
            <p *ngIf="book.first_publish_year"><strong>First Published:</strong> {{ book.first_publish_year }}</p>
            <p *ngIf="book.edition_count"><strong>Editions:</strong> {{ book.edition_count }}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class OpenLibraryComponent implements OnInit {
  books: Book[] = [];

  constructor(private openLibraryService: OpenLibraryService) {}

  ngOnInit(): void {
    this.openLibraryService.searchBooks().subscribe({
      next: (data) => {
        this.books = data.docs;
      },
      error: (error) => console.error('Error fetching books:', error)
    });
  }
}
