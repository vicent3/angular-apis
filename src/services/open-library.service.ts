import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OpenLibraryResponse } from '../models/open-library.model';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {
  private apiUrl = 'https://openlibrary.org/search.json';

  constructor(private http: HttpClient) {}

  searchBooks(query: string = 'javascript'): Observable<OpenLibraryResponse> {
    return this.http.get<OpenLibraryResponse>(`${this.apiUrl}?q=${query}&limit=10`);
  }
}
