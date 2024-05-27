import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const TrailApiURL = 'http://localhost:8180/trailProperties';
const SingleApiURL = 'http://localhost:8180/properties';

@Injectable({
  providedIn: 'root',
})
export class TrailPropertiesService {
  constructor(private http: HttpClient) {}

  getTrailProperties(): Observable<any[]> {
    return this.http.get<any[]>(TrailApiURL);
  }

  getSingleProperty(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${SingleApiURL}/${id}`, {
      withCredentials: true,
    });
  }
}
