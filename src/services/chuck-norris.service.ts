import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChuckNorrisJoke } from '../models/chuck-norris.model';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {
  private apiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) {}

  getRandomJoke(): Observable<ChuckNorrisJoke> {
    return this.http.get<ChuckNorrisJoke>(this.apiUrl);
  }
}
