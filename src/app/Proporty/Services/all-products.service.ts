import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AllPropertiesApiURL = 'http://localhost:8180/allproperties';

@Injectable({
  providedIn: 'root',
})
export class AllProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(AllPropertiesApiURL, { withCredentials: true });
  }
}
