import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define el modelo (ver siguiente paso) e importa aquí
import { SimpsonCharacter } from '../models/simpson-character.model';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsApiService {
  private apiUrl = 'https://thesimpsonsapi.com/api/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<SimpsonCharacter[]> {
    return this.http.get<SimpsonCharacter[]>(this.apiUrl);
  }
}
