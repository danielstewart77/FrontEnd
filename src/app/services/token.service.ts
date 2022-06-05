import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { TokenDecoded, UserToken } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token?: TokenDecoded;
  constructor() {}

  consumeToken(userToken: UserToken ){
    
    
    //var fun = jwtDecode(userToken.token);
    this.token = jwtDecode(userToken.token);

    // for testing only: store user info
    localStorage.setItem('username', this.token.Username);
    
    // create model with exp, ... , role
    localStorage.setItem('role', this.token.Role)

  }
}
