import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor( private http: HttpClient) {
  }

  public get(url: string, options?: any) {
    return this.http.get(url, options);
  }

  public post(url: string, options: any) {
    return this.http.post(url, options);
  }
}
