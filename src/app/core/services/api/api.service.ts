import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { HelperService } from '../helper/helper.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl;
  private apiUrl;
  private headers = {};
  private fileHeader = {};

  constructor(
    private http: HttpClient,
    private helper: HelperService,
    private storage : StorageService
  ) {
      this.baseUrl = environment.rbacEndPoint;
      this.apiUrl = environment.rbacEndPoint;
   }

   getHeader() {
    return {headers: this.helper.getAuthHeader()};
  }

  public get(route): Observable<any> {
    const url = this.apiUrl + route;
    return this.http.get(url, this.getHeader());
  }

  public post(route, data): Observable<any> {
    const url = this.apiUrl + route;
    return this.http.post(url, data, this.getHeader());
  }

  public login(route, data): Observable<any> {
    const url = this.apiUrl + route;
    return this.http.post(url, data);
  }

  public saveWithoutToken(route, data): Observable<any> {
    const url = this.apiUrl + route;
    return this.http.post(url, data);
  }

  public update(route, data): Observable<any> {
    const url = this.apiUrl + route;
    return this.http.put(url, data, this.getHeader());
  }

  public delete(route, id): Observable<any> {
    const url = this.apiUrl + route + id;
    return this.http.delete(url, this.getHeader());
  }

}
