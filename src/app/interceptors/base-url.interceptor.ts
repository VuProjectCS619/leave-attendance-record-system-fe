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
    const baseUrl = "http://localhost:3000/"
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.// Clone the request and set the new header in one step.
    const authReq = request.clone({url : `${baseUrl}${request.url}`, setHeaders: { Authorization:  "bearer " + localStorage.getItem('auth_token') || "" } });
    // send cloned request with header to the next handler.
    return next.handle(authReq);
    // console.log("request" , authReq)

  }
}
