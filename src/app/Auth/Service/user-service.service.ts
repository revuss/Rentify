import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private apiUrl = `${environment.apiBaseUrl}/signup`;
  private apiUrlLogin = `${environment.apiBaseUrl}/login`;
  private apiUrlAddProduct = `${environment.apiBaseUrl}/add-property`;
  private MYPropertiesApiURL = `${environment.apiBaseUrl}/users/myProperties`;
  private DeletePropertiesApiURL = `${environment.apiBaseUrl}/properties`;
  private LikedPropertiesURL = `${environment.apiBaseUrl}/users/likedproperties`;
  private RemoveLikeURl = `${environment.apiBaseUrl}/properties/likes`;
  constructor(private http: HttpClient) {}

  signUp(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  login(LoginForm: any): Observable<any> {
    return this.http.post<any>(this.apiUrlLogin, LoginForm, {
      withCredentials: true,
    });
  }

  addProduct(PropertyData: any): Observable<any> {
    return this.http.post<any>(this.apiUrlAddProduct, PropertyData, {
      withCredentials: true,
    });
  }

  MyProductsGet(): Observable<any[]> {
    return this.http.get<any[]>(this.MYPropertiesApiURL, {
      withCredentials: true,
    });
  }

  LikedProductsGet(): Observable<any[]> {
    return this.http.get<any[]>(this.LikedPropertiesURL, {
      withCredentials: true,
    });
  }

  deleteProperty(id: string): Observable<any> {
    return this.http.delete<any>(`${this.DeletePropertiesApiURL}/${id}`, {
      withCredentials: true,
    });
  }
  removePropertyLike(id: string): Observable<any> {
    return this.http.delete<any>(`${this.RemoveLikeURl}/${id}`, {
      withCredentials: true,
    });
  }
}
