import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  saveToken(token: string): any{
    sessionStorage.setItem('token', token);
  }

  getToken(): any{
    return sessionStorage.getItem('token');
  }
}
