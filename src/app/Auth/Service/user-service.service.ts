import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private apiUrl = 'http://localhost:8180/signup';
  private apiUrlLogin = 'http://localhost:8180/login';

  constructor(private http: HttpClient) {}

  signUp(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  login(LoginForm: any): Observable<any> {
    return this.http.post<any>(this.apiUrlLogin, LoginForm, {
      withCredentials: true,
    });
  }
}
