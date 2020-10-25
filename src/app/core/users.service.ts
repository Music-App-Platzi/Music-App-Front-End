import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { UserResponse } from './../models/users.model';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  allUsers(): Observable<UserResponse>{
    return this.http.get<UserResponse>(`${environment.api}users`);
  }
  delateUser(id: UserResponse): Observable<UserResponse>{
    console.log(id);
    return this.http.delete<UserResponse>(`${environment.api}users/${id}`);
  }
}
