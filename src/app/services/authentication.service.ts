import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDto } from '../models/user.model';
import { UserToken } from '../models/token.model';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Type': 'text/plain'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  login(userDto: UserDto): Observable<UserToken> {
    return this.http.post<UserToken>(environment.JwtWebApiBaseUrl, JSON.stringify(userDto), httpOptions);
  }
}
