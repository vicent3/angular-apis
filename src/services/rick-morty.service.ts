import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RickMortyResponse } from '../models/rick-morty.model';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<RickMortyResponse> {
    return this.http.get<RickMortyResponse>(this.apiUrl);
  }
}
