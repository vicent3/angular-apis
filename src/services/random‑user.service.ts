import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomUserResponse, User } from '../models/random‑user.model';

@Injectable({
    providedIn: 'root'
})
export class RandomUserService {
    private apiUrl = 'https://randomuser.me/api/';

    constructor(private http: HttpClient) { }

    getUsers(count: number = 20): Observable<RandomUserResponse> {
        return this.http.get<RandomUserResponse>(`${this.apiUrl}?results=${count}`);
    }
}
