import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FBIResponse } from '../models/fbi.model';

@Injectable({
  providedIn: 'root'
})
export class FBIService {
  private apiUrl = 'https://api.fbi.gov/artcrimes/v1/list';

  constructor(private http: HttpClient) { }

  getWantedList(): Observable<FBIResponse> {
    return this.http.get<FBIResponse>(this.apiUrl);
  }
}
