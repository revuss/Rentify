import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private apiUrlCheckAuth = 'http://localhost:8180/check/author';

  constructor(private http: HttpClient, private router: Router) {}

  checkAuth(): Observable<any> {
    return this.http.get<any>(this.apiUrlCheckAuth, { withCredentials: true });
  }
}
