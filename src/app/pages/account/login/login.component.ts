import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/usermodel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserModel = {
    username: '',
    password: '',
    confirmPassword: ''
  };

  //logic will be isUserRegistered
  context: string = 'Login';
  goToLink: string = 'Register?';

  constructor() { }

  ngOnInit(): void {
  }

  switchForm(): void {
    this.goToLink = this.context + '?';
    this.context = this.context === 'Login' ? 'Register' : 'Login';
  }

  authenticateUser(f: NgForm): void {
    console.log(this.user);
    f.reset();
  }

}
