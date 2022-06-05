import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  userName?: any;
  userRole?: any;

  ngOnInit(): void {
    this.userName = localStorage.getItem('username');
    this.userRole = localStorage.getItem('role');
  }

  

}
