import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      const cloned = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}
