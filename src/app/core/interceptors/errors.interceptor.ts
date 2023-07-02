import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpStatus } from '../enums/http-status';
 

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("[url] ", request.url);
    return next.handle(request).pipe(
      catchError( (error) => {
        if(error.status === HttpStatus.NOT_FOUND){
          return throwError(()=>'Not Found URL');
        }
        // return throwError(error.message); // esta es la forma de como se hacía antes
        return throwError(()=>error.message);
      }) 
    );
  }
}
