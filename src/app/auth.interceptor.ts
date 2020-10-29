import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { TokenService } from './core/token.service';
import { SpinnerService } from './core/spinner.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(
    private tokenService: TokenService,
    private spinnerService: SpinnerService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.spinnerService.playSpinner();
    request = this.addToken(request);
    return next.handle(request)
    .pipe(
      finalize(() => {
        this.spinnerService.stopSpinner();
      })
    );
  }
  private addToken(request: HttpRequest<any>): any{
    const token = this.tokenService.getToken();
    if (token){
      request = request.clone({
        setHeaders: {
          token
        },
      });
      return request;
    }
    return request;
  }
}
