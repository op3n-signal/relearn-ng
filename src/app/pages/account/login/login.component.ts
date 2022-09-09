import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //logic will be isUserRegistered
  context: string = true ? 'Login' : 'Register';

  constructor() { }

  ngOnInit(): void {
  }

}
