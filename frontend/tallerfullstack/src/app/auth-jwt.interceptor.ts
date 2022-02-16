import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthJWTInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
      'access-token': localStorage.getItem('token') || '',
    });
    const token: any = localStorage.getItem('token');
    const clonedRequest = request.clone({
      headers,/* : request.headers
      .set('access-token', token) */
    });

    //console.log("new headers", clonedRequest.headers.keys());
    return next.handle(clonedRequest);
  }
}
