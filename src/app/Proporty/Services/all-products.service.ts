import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

const AllPropertiesApiURL = `${environment.apiBaseUrl}/allproperties`;

@Injectable({
  providedIn: 'root',
})
export class AllProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(AllPropertiesApiURL, { withCredentials: true });
  }
}
