import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/usermodel';
import { ClientService } from 'src/app/utilities/services/client.service';

@Component({
  selector: 'app-sign-on-form',
  templateUrl: './sign-on-form.component.html',
  styleUrls: ['./sign-on-form.component.scss']
})
export class SignOnFormComponent implements OnInit {
  user: UserModel = {
    id: '',
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  };

  context: string = 'login';

  constructor(private client: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.context = this.router.url.includes(this.context.toLowerCase()) ? 'Login' : 'SignUp';
  }

  authenticateUser(f: NgForm): void {
    this.context === 'Login' ? this.client.login(this.user) : this.client.register(this.user);

    f.reset();
  }

}
