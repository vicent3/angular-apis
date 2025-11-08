import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiUrl = 'https://api.thecatapi.com/v1/images/search';

  constructor(private http: HttpClient) {}

  getCats(limit: number = 10): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.apiUrl}?limit=${limit}`);
  }
}
