import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogImageResponse } from '../models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  getRandomDogImages(count: number = 10): Observable<DogImageResponse> {
    return this.http.get<DogImageResponse>(`https://dog.ceo/api/breeds/image/random/${count}`);
  }
}
