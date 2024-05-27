import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private apiUrlCheckAuth = `${environment.apiBaseUrl}/check/author`;

  constructor(private http: HttpClient, private router: Router) {}

  checkAuth(): Observable<any> {
    return this.http.get<any>(this.apiUrlCheckAuth, { withCredentials: true });
  }
}
