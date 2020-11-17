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
  // TODO:
  // Id is no typed
  getUser(id): Observable<UserResponse>{
    return this.http.get<UserResponse>(`${environment.api}users/${id}`);
  }
  updateUser(id: number, changes: Partial<UserResponse>): Observable<UserResponse>{
    return this.http.put<UserResponse>(`${environment.api}users/${id}`, changes);
  }
  delateUser(id: UserResponse): Observable<UserResponse>{
    console.log(id);
    return this.http.delete<UserResponse>(`${environment.api}users/${id}`);
  }
}
