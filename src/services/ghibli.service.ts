import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GhibliFilm } from '../models/ghibli.model';

@Injectable({
  providedIn: 'root'
})
export class GhibliService {
  private apiUrl = 'https://ghibliapi.vercel.app/films';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<GhibliFilm[]> {
    return this.http.get<GhibliFilm[]>(this.apiUrl);
  }
}
