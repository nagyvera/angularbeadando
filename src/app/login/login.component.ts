import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor() { }

  ngOnInit() { }

  loginUser(): void {
    if (this.username === 'Admin' && this.password === 'password'){
      console.log('Success!');
    }
  }
}
