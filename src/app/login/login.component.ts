import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { UserDto } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDto: UserDto;
  testResponse: Observable<string>;

  message: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private tokenService: TokenService) { 
    this.userDto = {username: "", password: ""};
    this.testResponse = new Observable<string>();
    this.message = "";
  }

  ngOnInit(): void {
    
  }

  

  onSubmit(){
    // call authentication service
    //this.testResponse = this.authService.login(this.userDto);
    // authenticate
    // get token
    // decript token
    // get roles

    of (this.authService.login(this.userDto).subscribe(
              (data) => {
                    this.message = data.username;

                    this.tokenService.consumeToken(data);

                    this.router.navigateByUrl('/welcome');
                },
              (error) => {
                    this.message = error;
                    //this.loading = false;
                }))
  }

}
