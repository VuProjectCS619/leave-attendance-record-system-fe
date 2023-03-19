import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl = "http://localhost:3000/api/"
    const cloned = request.clone({url:`${baseUrl}${request.url}`})
    cloned.headers.set(
      "Authorization",
      'Bearer ' + localStorage.getItem('auth_token')
    )
    return next.handle(cloned);
  }
}
