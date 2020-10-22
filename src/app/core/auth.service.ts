import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

import { LoginResponse, Register, RegisterResponse } from './../models/auth.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private token: TokenService,
    private http: HttpClient
  ) { }

  loginUser(mail: string, password: string): Observable<LoginResponse>{
    const data = {mail, password}
    return this.http.post<LoginResponse>(`${environment.api}auth/login`, data)
    .pipe(
      tap(( dataTk: LoginResponse) => {
        const token = dataTk.token;
        sessionStorage.setItem('user', JSON.stringify(dataTk));
        this.token.saveToken(token);
      })
    );
  }
  createUser(data: Register): Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(`${environment.api}auth/signup`, data);
  }
}
