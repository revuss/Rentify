import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

const TrailApiURL = `${environment.apiBaseUrl}/trailProperties`;
const SingleApiURL = `${environment.apiBaseUrl}/properties`;

const LikePropertyURL = `${environment.apiBaseUrl}/users/like`;

@Injectable({
  providedIn: 'root',
})
export class TrailPropertiesService {
  constructor(private http: HttpClient) {}

  getTrailProperties(): Observable<any[]> {
    return this.http.get<any[]>(TrailApiURL);
  }

  getSingleProperty(id: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${SingleApiURL}/${id}`,

      {
        withCredentials: true,
      }
    );
  }

  LikeProperty(id: string): Observable<any[]> {
    return this.http.post<any[]>(
      `${LikePropertyURL}/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
  }
}
